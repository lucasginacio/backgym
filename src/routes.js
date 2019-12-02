import { Router } from 'express';

import StudentController from './app/controllers/StudentController';
import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router(); // variavel criada da importaçao do router do express

routes.post('/sessions', SessionController.store);

routes.post('/students', StudentController.store);
routes.post('/users', UserController.store);

routes.use(authMiddleware); // so vai funcionar pra baixo

routes.put('/students', StudentController.update);

export default routes;
