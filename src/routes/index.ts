import { Router } from 'express';

import StudentController from '../app/controllers/StudentController';

const routes: Router = Router();

// Student routes
routes.get('/student/', StudentController.index);
routes.get('/student/:id', StudentController.get);
routes.put('/student/:id', StudentController.update);
routes.post('/student/', StudentController.store);
routes.delete('/student/:id', StudentController.destroy);

export default routes;
