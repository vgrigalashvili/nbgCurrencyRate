import axios from 'axios';

export class MbgCurrencyService {
  async getRates(url: string, queryString?: string): Promise<any> {
    try {
      const result = await axios.get(url + queryString);
      return result;
    } catch (ex) {
      return ex;
    }
  }
}
