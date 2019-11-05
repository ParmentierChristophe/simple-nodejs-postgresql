import KoaRouter from 'koa-router';

import PostController from './controller';

const router = new KoaRouter({
	prefix: 'posts',
});

router.get('/', async (ctxt) => {
	ctxt.status(200).json(await PostController.list());
});

router.get('/:id', async (ctxt) => {
	const post = await PostController.getById(ctxt.params.id);

	if (post) {
		return ctxt.status(200).json(post);
	}
	throw new Error('Post with the specified ID does not exists');
});

router.post('/', async (ctxt) => {
	const post = await PostController.create(ctxt.body);

	if (post) {
		return ctxt.status(201).json(post);
	}
	throw new Error('Post creation failed');
});

router.put('/:id', async (ctxt) => {
	const post = await PostController.update(ctxt.body);

	if (post) {
		return ctxt.status(200).json(post);
	}
	throw new Error('Post update failed');
});

router.delete('/:id', async (ctxt) => {
	await PostController.delete(ctxt.params.id);
	return ctxt.status(204).send();
});

export default router;
