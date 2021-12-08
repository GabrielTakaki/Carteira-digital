import React from 'react';
import { DefaultValue } from '../interfaces'

const defaultsState = {
  currencies: [],
}

const myContext = React.createContext<DefaultValue>(defaultsState);

export default myContext;
