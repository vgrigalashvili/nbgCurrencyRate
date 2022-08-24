import express, { NextFunction, Request, Response } from 'express';
import { MbgCurrencyService } from '../services/mbgCurrencyService';

import dotenv from 'dotenv';

dotenv.config();

const { ENG_URL } = process.env;

const currencyService = new MbgCurrencyService();

const router = express.Router();

router.get(
  '/api/rates',
  async (req: Request, res: Response, next: NextFunction) => {
    const { currencies, date } = req.query;

    let concatQs;

    if (currencies && date) {
      concatQs = `?currencies=${currencies}&date=${date}`;
    }

    if (currencies && !date) {
      concatQs = `?currencies=${currencies}`;
    }

    if (!currencies && date) {
      concatQs = `?date=${date}`;
    }

    if (!currencies && !date) {
      concatQs = '';
    }

    const { data } = await currencyService.getRates(ENG_URL!, concatQs);

    res.send({ currencyRates: data[0] });
  }
);

export { router as ratesRouter };
