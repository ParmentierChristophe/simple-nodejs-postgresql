import KoaRouter from 'koa-router';

import UserController from './controller';

const router = new KoaRouter({
	prefix: 'users',
});

router.get('/', async (ctxt) => {
	ctxt.status(200).json(await UserController.list());
});

router.get('/:id', async (ctxt) => {
	const user = await UserController.getById(ctxt.params.id);

	if (user) {
		return ctxt.status(200).json(user);
	}
	throw new Error('User with the specified ID does not exists');
});

router.post('/', async (ctxt) => {
	const user = await UserController.create(ctxt.body);

	if (user) {
		return ctxt.status(201).json(user);
	}
	throw new Error('User creation failed');
});

router.put('/:id', async (ctxt) => {
	const user = await UserController.update(ctxt.body);

	if (user) {
		return ctxt.status(200).json(user);
	}
	throw new Error('User update failed');
});

router.delete('/:id', async (ctxt) => {
	await UserController.delete(ctxt.params.id);
	return ctxt.status(204).send();
});

export default router;
