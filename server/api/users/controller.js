import models from '../../../database/models';

export default {
	create(props) {
		return models.User.create(props);
	},

	list() {
		return models.User.findAll({});
	},

	getById(id) {
		return models.User.findOne({
			where: { id },
			include: [ {
				model: models.Post,
				as: 'posts',
			} ],
		});
	},

	async update(id, props) {
		const [ updated ] = await models.User.update(props, { where: { id } });
		if (!updated) {
			throw new Error('User not found');
		}
		return models.User.findOne({ where: { id } });
	},

	delete(id) {
		return models.User.destroy({ where: { id } });
	},
};
