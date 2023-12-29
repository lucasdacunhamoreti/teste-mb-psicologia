import { Router } from 'express';
import avaliationRoute from './avaliation.route';

const route = Router();

route.use('/avaliation', avaliationRoute);

export default route;