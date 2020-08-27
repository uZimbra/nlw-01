import express from 'express';
import upload from '../src/config/multer';
import { celebrate } from 'celebrate';

import ColectPointsController from './controllers/ColectPointsController';
import ItemsController from './controllers/ItemsController';
import dataValidation from './config/dataValidation';

const routes = express.Router();

const pointsController = new ColectPointsController();
const itemsController = new ItemsController();

routes.get('/items', itemsController.index);

routes.get('/points', pointsController.index);
routes.get('/points/:id', pointsController.show);
routes.post('/points', 
  upload.single('image'), 
  celebrate({ body: dataValidation }, { abortEarly: false }),
  pointsController.create
);

export default routes;