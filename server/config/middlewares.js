import koaBodyparser from 'koa-bodyparser';

export default (app) => {
	app.use(koaBodyparser());

	app.use(async (ctxt, next) => {
		try {
			return await next();
		} catch (error) {
			if (typeof error === 'object' && error.httpCode) {
				return ctxt.status(error.httpCode).json(error.message);
			}
			return ctxt.status(500).json(`Bad error format (${error})`);
		}
	});
};
