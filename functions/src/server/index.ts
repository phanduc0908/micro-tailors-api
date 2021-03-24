import * as express from 'express';
import { Express } from 'express';
import * as cors from 'cors';
import { urlencoded, json } from 'body-parser';

import database from '../databases/dbConnection';

const app: Express = express();

/** Parse the body of the request */
app.use(urlencoded({ extended: true }));
app.use(json());

app.use(cors({
  origin: true
}))

app.get('/test', async (req, res) => {
  const data = await database.collection('users').doc('8YyWgRgd2uMgZj6PTniM').get();
  res.json({
    data: data.data()
  })
})

export default app;