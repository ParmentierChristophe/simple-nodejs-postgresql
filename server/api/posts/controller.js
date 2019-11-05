import models from '../../../database/models';

export default {
	create(props) {
		return models.Post.create(props);
	},

	list() {
		return models.Post.findAll({});
	},

	getById(id) {
		return models.Post.findOne({
			where: { id },
			include: [ {
				model: models.Post,
				as: 'posts',
			} ],
		});
	},

	async update(id, props) {
		const [ updated ] = await models.Post.update(props, { where: { id } });
		if (!updated) {
			throw new Error('Post not found');
		}
		return models.Post.findOne({ where: { id } });
	},

	delete(id) {
		return models.Post.destroy({ where: { id } });
	},
};
