import * as express from 'express';
import { Express } from 'express';
import * as cors from 'cors';
import { urlencoded, json } from 'body-parser';

const app: Express = express();

/** Parse the body of the request */
app.use(urlencoded({ extended: true }));
app.use(json());

app.use(cors({
  origin: true
}))

app.get('/test', (req, res) => {
  res.json({
    data: 'Phan Van Duc'
  })
})

export default app;