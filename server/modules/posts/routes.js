import { Router } from 'express';
import * as PostController from './controller';

const routes = new Router();

routes.get('/posts', PostController.getAllPosts);
routes.get('/posts/:id', PostController.getPostById);
routes.post('/posts', PostController.createPost);
routes.delete('/posts/:id', PostController.deletePost);
routes.put('/posts/:id', PostController.updatePost);

export default routes;
