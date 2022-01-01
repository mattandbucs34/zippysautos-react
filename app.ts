import express from 'express';
import { db } from './config/connection';
import { routesInit } from './config/routes_config';

db.connect((err) => {
  if(err) throw err;
  console.log("connected");
});

const app = express();
routesInit(app);

app.listen('5000', () => {
  console.log("Listening to port 5000")
})