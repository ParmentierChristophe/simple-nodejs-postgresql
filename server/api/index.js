
import fs from 'fs';
import KoaRouter from 'koa-router';

function fileName2File(fileName, path) {
	try {
		return Object.assign(fs.statSync(`${path}/${fileName}`), {
			name: fileName,
			path: `${path}/${this.name}`,
		});
	} catch (error) {
		return null;
	}
}

function listDirectories(path) {
	return fs.readdirSync(path)
		.map((fileName) => fileName2File(fileName, path))
		.filter((file) => !file.name.startsWith('.') && file.isDirectory());
}

function routesFiles(path) {
	return listDirectories(path)
		.map((directory) => fileName2File('routes.js', directory.path)).filter(Boolean)
		.map((file) => require(file.path).default); // eslint-disable-line global-require
}

const api = new KoaRouter({ prefix: '/api' });

routesFiles(__dirname).forEach((module) => api.use(module.routes()));

export default api.routes();
