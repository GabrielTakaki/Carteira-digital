import React from 'react';
import { CardProps } from '../interfaces';

const CurrencyCard: React.FC<CardProps> = ({ fromCurrency, fromValue, toCurrency, toValue }) => {
  return (
    <div className="card">
      <section className="card__section">
        <h4 className="card__header-from">{ `${ fromCurrency } - ${ fromValue } = ` }</h4>
        <h2 className="card__header-to">{ `${ toCurrency } - ${ toValue }` }</h2>
      </section>
    </div>
  );
}

export default CurrencyCard;
