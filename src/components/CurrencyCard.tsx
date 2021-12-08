import React from 'react';
import { CardProps } from '../interfaces';

const CurrencyCard: React.FC<CardProps> = ({ fromCurrency, fromValue, toCurrency, toValue, toCurrencyTwo, toValueTwo }) => {
  const today = new Date();
  return (
    <div className="card">
      <section className="card__section">
        <h3 className="card__header-from">{ `${ fromValue }  ${ fromCurrency } =` }</h3>
        <h2 className="card__header-to" id="to-one">{ `${ toValue }  ${ toCurrency }` }</h2>
        <h2 className="card__header-to" id="to-two">{ `${ toValueTwo }  ${ toCurrencyTwo }` }</h2>
        <h4 className="card__header-date">
          { `Data de consulta: ${ today.toLocaleDateString() } ${ today.getHours() }:${ today.getMinutes() }` }
        </h4>
      </section>
    </div>
  );
}

export default CurrencyCard;
