import React, { useState, useContext } from 'react';
import '../styles/style.css';
import Label from '../components/Label';
import Button from '../components/Button';
import Navbar from '../components/Header';
import CurrencyCard from '../components/CurrencyCard';
import myContext from '../context/myContext';

const Home: React.FC = () => {
  // Valor dado pelo usuario
  const [value, setValue] = useState('');

  // Mostrar informacoes ao clicar no botao
  const [clicked, setClicke] = useState(false);
  const [errorClick, setErrorClick] = useState(false);

  // Valor dado pelo usuario * valor da moeda
  const [valueTimesBrl, setValueTimesBrl] = useState(0);
  const [valueTimesUsd, setValueTimesUsd] = useState(0);
  const [valueTimesEur, setValueTimesEur] = useState(0);

  // Moeda selecionada pelo usuario
  const [currencySel, setCurrencySel] = useState('');
  const [getCurrency, setGetCurrency] = useState('');

  
  const { realRate, dolarRate, euroRate } = useContext(myContext);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    if (value.length > 0 && currencySel !== '') {
      setClicke(true);
      setErrorClick(false);
    } else {
      setErrorClick(true);
    }
    setCurrencySel('');
    if (currencySel === 'EUR') {
      setGetCurrency('Euros');
      setValueTimesBrl((parseFloat(value) * realRate));
      setValueTimesUsd(parseFloat(value) * dolarRate);
    };
    if (currencySel === 'USD'){
      setGetCurrency('Dólares americanos');
      setValueTimesEur(parseFloat(value) * euroRate / dolarRate);
      setValueTimesBrl(parseFloat(value) * realRate / dolarRate);
    }
    if (currencySel === 'BRL') {
      setGetCurrency('Reais brasileiro');
      setValueTimesEur(parseFloat(value) * euroRate / realRate);
      setValueTimesUsd(parseFloat(value) * dolarRate / realRate);
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
          placeholder="50"
        />
        <label htmlFor="currencies">
          <p className="form__paragraph-select">Moeda</p>
          <select name="currencySel" value={ currencySel } onChange={ (e) => setCurrencySel(e.target.value) } id="currencies" className="form__select">
            <option value="" className="form__option">Selecione</option>
            <option className="form__option" value="BRL">Real</option>
            <option className="form__option" value="USD">Dólar americano</option>
            <option className="form__option" value="EUR">Euro</option>
          </select>
        </label>
        <Button
          onClick={ (e) => handleClick(e)}
          text="Converter"
          className="form__button"
          />
      </form>
      {errorClick ? <p className="error">Preencha todos os campos</p> : null}
      { clicked && getCurrency === 'Euros' ? <CurrencyCard
        fromCurrency={ getCurrency }
        fromValue={ value }
        toCurrency="Reais brasileiro"
        toValue={ valueTimesBrl.toFixed(2) }
        toCurrencyTwo="Dólares americanos"
        toValueTwo={ valueTimesUsd.toFixed(2) }
      /> : ''}
      { clicked && getCurrency === 'Reais brasileiro' ? <CurrencyCard
        fromCurrency={ getCurrency }
        fromValue={ value }
        toCurrency="Euros"
        toValue={ valueTimesEur.toFixed(2) }
        toCurrencyTwo="Dólares americanos"
        toValueTwo={ valueTimesUsd.toFixed(2) }
      /> : ''}
       { clicked && getCurrency === 'Dólares americanos' ? <CurrencyCard
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
