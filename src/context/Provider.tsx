import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import myContext from './myContext';
import { Props } from '../interfaces';

const RecipesProvider: React.FC<Props> = ({ children }) => {
  const [currencies, setCurrencies] = useState<string[]>([]);

  // Poderia pegar dinamicamente. Porem, endpoint que permite isto, é pago.
  const [realRate, setRealRate] = useState(0);
  const [dolarRate, setDolarRate] = useState(0);
  const [euroRate, setEuroRate] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://api.exchangeratesapi.io/v1/latest?access_key=226e45afd420262b5cea9678d7caddfd');
        const data = await response.json();
        const filteredData = [data.base, ...Object.keys(data.rates)]
          .filter((currency: string) => currency === 'EUR' || currency === 'USD' || currency === 'BRL');
        const removeRepeated = [...Array.from(new Set(filteredData))];

        // EUR atual cotação
        const euroCurreny = Object.keys(data.rates)[46];
        setEuroRate(data.rates[euroCurreny]);

        // BRL atual cotacao
        const realCurrency = Object.keys(data.rates)[19];
        setRealRate(data.rates[realCurrency]);

        // USD atual cotacao
        const dolarCurrency = Object.keys(data.rates)[149];
        setDolarRate(data.rates[dolarCurrency]);

        return setCurrencies(removeRepeated);
      } catch (e) {
        console.log(e);
      }
    }
    fetchData();
  }, []);

  const providerState = {
    currencies,
    realRate,
    // findByAddress,
  };

  return (
    <myContext.Provider value={ providerState }>
      {children}
    </myContext.Provider>
  );
}

RecipesProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default RecipesProvider;
