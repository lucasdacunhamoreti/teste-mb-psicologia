import { Router } from 'express';
import AvaliationController from '../controllers/avaliation.controller';

const router = Router();
const avaliationController = new AvaliationController();

router.get('/list', (req, res) => avaliationController.getAvaliations(req, res));

router.post('/add', (req, res) => avaliationController.newAvaliation(req, res));

router.delete('/delete/:id', (req, res) => avaliationController.deleteAvaliation(req, res));

export default router;