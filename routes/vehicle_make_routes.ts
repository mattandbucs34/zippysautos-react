import express from 'express';
import makeController from '../controller/makeController';
const makeRouter = express.Router();

makeRouter.get("/vehicle_makes", makeController.getDistinctMakes);

export { makeRouter }