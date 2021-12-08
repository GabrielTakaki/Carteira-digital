import React from 'react';
import { CardProps } from '../interfaces';

const CurrencyCard: React.FC<CardProps> = ({ fromCurrency, fromValue, toCurrency, toValue, toCurrencyTwo, toValueTwo }) => {
  return (
    <div className="card">
      <section className="card__section">
        <h3 className="card__header-from">{ `${ fromValue }  ${ fromCurrency } =` }</h3>
        <h2 className="card__header-to">{ `${ toValue }  ${ toCurrency }` }</h2>
        <h2 className="card__header-to">{ `${ toValueTwo }  ${ toCurrencyTwo }` }</h2>
      </section>
    </div>
  );
}

export default CurrencyCard;
