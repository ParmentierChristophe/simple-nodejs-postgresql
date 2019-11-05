import Koa from 'koa';

import middlewaresConfig from './config/middlewares';
import api from './api';

const app = new Koa();
middlewaresConfig(app);

app.use(api);

const PORT = process.env.PORT || 3000;

app.on('error', (error) => console.error(`👽Houston we have a problem : ${error} ☠️`));
app.listen(PORT, () => console.log(`🎉 APP Listen to port: ${PORT} 🎉`));
