import React, { useState, useContext } from 'react';
import '../styles/style.css';
import Label from '../components/Label';
import Button from '../components/Button';
import Navbar from '../components/Header';
import myContext from '../context/myContext';

const Home: React.FC = () => {
  const [value, setValue] = useState<number>(0);
  const [currencySel, setCurrencySel] = useState('');
  const { currencies } = useContext(myContext);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
  }

  return (
    <>
      <Navbar />
      {console.log(currencies)}
      <form action="currencies" className="form">
        <Label
          id="value"
          name="value"
          value={ value }
          onChange={ (e: any) => setValue(e.target.value) }
          placeholder="50"
          text="Valor"
          type="number"
        />
        <label htmlFor="currencies">
          <p className="form__paragraph-select">Moeda</p>
          <select name="currencySel" value={ currencySel } onChange={ (e) => setCurrencySel(e.target.value) } id="currencies" className="form__select">
          {currencies.map((currency: any, index: number) => (
            <option className="form__option" key={ index }>{ currency }</option>
          ))}
          </select>
        </label>
        <Button
          onClick={ (e) => handleClick(e)}
          text="Converter"
          className="form__button"
        />
      </form>
    </>
  );
}

export default Home;
