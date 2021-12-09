import React from 'react';
import { DefaultValue } from '../interfaces'

const defaultsState = {
  realRate: 0,
  euroRate: 0,
  dolarRate: 0,
}

const myContext = React.createContext<DefaultValue>(defaultsState);

export default myContext;
