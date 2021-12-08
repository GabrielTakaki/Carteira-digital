import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import myContext from './myContext';
import { Props } from '../interfaces';

const RecipesProvider: React.FC<Props> = ({ children }) => {
  const [currencies, setCurrencies] = useState<string[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://api.exchangeratesapi.io/v1/latest?access_key=226e45afd420262b5cea9678d7caddfd');
        const data = await response.json();
        const filteredData = [data.base, ...Object.keys(data.rates)]
          .filter((currency: string) => currency === 'EUR' || currency === 'USD' || currency === 'BRL');
        const removeRepeated = [...Array.from(new Set(filteredData))];
        return setCurrencies(removeRepeated);
      } catch (e) {
        console.log(e);
      }
    }
    fetchData();
  }, []);

  const providerState = {
    currencies,
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
