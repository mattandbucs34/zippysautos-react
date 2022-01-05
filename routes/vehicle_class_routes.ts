import express from 'express';
import classController from '../controller/classController';
const classRouter = express.Router();

classRouter.get("/vehicle_classes", classController.getDistinctClasses);

export { classRouter }