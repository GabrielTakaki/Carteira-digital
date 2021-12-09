import currenciesMock from './currenciesMock';

const fetch = (url) => Promise.resolve({
  status: 200,
  ok: true,
  json: () => {
    if (url === 'http://api.exchangeratesapi.io/v1/latest?access_key=226e45afd420262b5cea9678d7caddfd')
      return Promise.resolve(currenciesMock);
  },
});

module.exports = fetch;
