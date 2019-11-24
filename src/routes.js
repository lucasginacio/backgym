import { Router } from 'express';

const routes = new Router(); // variavel criada da importaçao do router do express

routes.get('/', (req, res) => res.json({ message: 'Hello world' }));

export default routes;
