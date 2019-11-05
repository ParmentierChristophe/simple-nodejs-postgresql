
const fs = require('fs');
const Sequelize = require('sequelize');
const envConfigs = require('../config/config');

const env = process.env.NODE_ENV || 'development';
const config = envConfigs[env];
const db = {};

let sequelize;
if (config.url) {
	sequelize = new Sequelize(config.url, config);
} else {
	sequelize = new Sequelize(config.database, config.username, config.password, config);
}


function loadFile(fileName, path) {
	if (fileName.endsWith('.js') && fileName !== 'index.js') {
		const model = sequelize.import(`${path}/${fileName}`);
		db[model.name] = model;
	}
}

function loadDir(path) {
	fs.readdirSync(path).map((fileName) => Object.assign(fs.statSync(`${path}/${fileName}`), { name: fileName }))
		.filter((file) => !file.name.startsWith('.') && file.name !== 'index.js')
		.forEach((file) => (file.isDirectory() ? loadDir(`${path}/${file.name}`) : loadFile(file.name, path)));
}

loadDir(__dirname);

Object.keys(db)
	.filter((model) => model.associate)
	.forEach((modelName) => db[modelName].associate(db));

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
