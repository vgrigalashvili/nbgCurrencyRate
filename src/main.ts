import express from 'express';

import { ratesRouter } from './routes';
import { json } from 'body-parser';
const app = express();

app.use(json());

// Routes.
app.use(ratesRouter);

app.listen(3000, () => {
  console.log('Server Started!.');
});
