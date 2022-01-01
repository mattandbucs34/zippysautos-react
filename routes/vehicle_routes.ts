import express from 'express';
import vehicleController from '../controller/vehicleController';
const router = express.Router();

router.get("/", vehicleController.getAll);

export { router };