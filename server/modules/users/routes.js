import { Router } from 'express';
import * as UserController from './controller';

const routes = new Router();

routes.get('/users', UserController.getAllUsers);
routes.get('/users/:id', UserController.getUserById);
routes.post('/users', UserController.createUser);
routes.delete('/users/:id', UserController.deleteUser);
routes.put('/users/:id', UserController.updateUser);

export default routes;
