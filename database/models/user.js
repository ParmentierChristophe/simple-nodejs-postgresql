module.exports = (sequelize, DataTypes) => sequelize.define('User', {
	name: DataTypes.STRING,
	email: DataTypes.STRING,
}, {
	classMethods: {
		associate(models) {
			models.User.hasMany(models.Post, {
				foreignKey: 'userId',
				as: 'posts',
				onDelete: 'CASCADE',
			});
		},
	},
});
