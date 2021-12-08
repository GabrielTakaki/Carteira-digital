import React from 'react';
import { DefaultValue } from '../interfaces'

const defaultsState = {
  currencies: [],
  realRate: 0,
}

const myContext = React.createContext<DefaultValue>(defaultsState);

export default myContext;
