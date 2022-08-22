import * as express from 'express';
import { Express } from 'express';
import * as cors from 'cors';
import 'reflect-metadata';
import { urlencoded, json } from 'body-parser';

import initRoutes from '../routers';

const app: Express = express();

/** Parse the body of the request */
app.use(urlencoded({ extended: true }));
app.use(json());

app.use(cors({
  origin: true
}));

initRoutes(app);

export default app;