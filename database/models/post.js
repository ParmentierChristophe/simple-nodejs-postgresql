module.exports = (sequelize, DataTypes) => sequelize.define('Post', {
	title: DataTypes.STRING,
	content: DataTypes.TEXT,
	userId: DataTypes.INTEGER,
}, {
	classMethods: {
		associate(models) {
			models.Post.belongsTo(models.User, {
				foreignKey: 'userId',
				as: 'author',
			});
		},
	},
});
