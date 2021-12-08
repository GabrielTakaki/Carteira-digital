import React, { useState, useContext } from 'react';
import '../styles/style.css';
import Label from '../components/Label';
import Button from '../components/Button';
import Navbar from '../components/Header';
import CurrencyCard from '../components/CurrencyCard';
import myContext from '../context/myContext';

const Home: React.FC = () => {
  // Valor dado pelo usuario
  const [value, setValue] = useState(0);

  // Mostrar informacoes ao clicar no botao
  const [clicked, setClicke] = useState(false);

  // Valor dado pelo usuario * valor da moeda
  const [valueTimesBrl, setValueTimesBrl] = useState(0);
  const [valueTimesUsd, setValueTimesUsd] = useState(0);
  const [valueTimesEur, setValueTimesEur] = useState(0);

  // Moeda selecionada pelo usuario
  const [currencySel, setCurrencySel] = useState('');
  const [getCurrency, setGetCurrency] = useState('');

  
  const { currencies, realRate, dolarRate, euroRate } = useContext(myContext);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    if (value > 0 && currencySel !== '') {
      setClicke(true);
    }
    setCurrencySel('');
    if (currencySel === 'EUR') {
      setGetCurrency('Euros');
      setValueTimesBrl((value * realRate));
      setValueTimesUsd(value * dolarRate);
    };
    if (currencySel === 'USD'){
      setGetCurrency('Dólares dos EUA');
      setValueTimesEur(value * euroRate / dolarRate);
      setValueTimesBrl(value * realRate / dolarRate);
    }
    if (currencySel === 'BRL') {
      setGetCurrency('Reais brasileiro');
      setValueTimesEur(value * euroRate / realRate);
      setValueTimesUsd(value * dolarRate / realRate);
    };
  }

  return (
    <>
      <Navbar />
      <form action="currencies" className="form">
        <Label
          id="value"
          name="value"
          value={ value }
          onChange={ (e: any) => setValue(e.target.value) }
          text="Valor"
          type="number"
        />
        <label htmlFor="currencies">
          <p className="form__paragraph-select">Moeda</p>
          <select name="currencySel" value={ currencySel } onChange={ (e) => setCurrencySel(e.target.value) } id="currencies" className="form__select">
            <option value="" className="form__option">Selecione</option>
          {currencies.map((currency: string, index: number) => (
            <option className="form__option" key={ index } value={ currency }>{ currency }</option>
          ))}
          </select>
        </label>
        <Button
          onClick={ (e) => handleClick(e)}
          text="Converter"
          className="form__button"
        />
      </form>
      { clicked && getCurrency === 'Euros' ? <CurrencyCard
        fromCurrency={ getCurrency }
        fromValue={ value }
        toCurrency="Reais brasileiro"
        toValue={ valueTimesBrl.toFixed(2) }
        toCurrencyTwo="Dólares dos EUA"
        toValueTwo={ valueTimesUsd.toFixed(2) }
      /> : ''}
      { clicked && getCurrency === 'Reais brasileiro' ? <CurrencyCard
        fromCurrency={ getCurrency }
        fromValue={ value }
        toCurrency="Euros"
        toValue={ valueTimesEur.toFixed(2) }
        toCurrencyTwo="Dólares dos EUA"
        toValueTwo={ valueTimesUsd.toFixed(2) }
      /> : ''}
       { clicked && getCurrency === 'Dólares dos EUA' ? <CurrencyCard
        fromCurrency={ getCurrency }
        fromValue={ value }
        toCurrency="Euros"
        toValue={ valueTimesEur.toFixed(2) }
        toCurrencyTwo="Reais brasileiro"
        toValueTwo={ valueTimesBrl.toFixed(2) }
      /> : ''}
    </>
  );
}

export default Home;
