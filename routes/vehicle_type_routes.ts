import express from 'express';
import typeController from '../controller/typeController';
const typeRouter = express.Router();

typeRouter.get("/vehicle_types", typeController.getDistinctTypes);

export { typeRouter }