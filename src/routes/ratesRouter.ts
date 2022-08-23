import express from 'express';

const router = express.Router();

router.get('/api/rates', (req, res) => {
  res.send({ msg: 'Hi There!' });
});

export { router as ratesRouter };
