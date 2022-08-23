import express from 'express';
import { json } from 'body-parser';

import { ratesRouter } from './routes';

const app = express();

app.use(json());

// Routes.
app.use(ratesRouter);

app.listen(3000, () => {
  console.log('Server Started!.');
});
