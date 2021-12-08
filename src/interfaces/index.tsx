export interface LabelProps {
  type: string;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: number | string;
  placeholder: string;
  text: string;
  id: string;
}

export interface ButtonProps {
  text: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  id?: string;
  className?: string;
}


export interface CardProps {
  fromCurrency: string;
  fromValue: number;
  toCurrency?: string;
  toValue?: number | string;
  toValueTwo?: number | string;
  toCurrencyTwo?: string;
}

export interface CurrenciesResults {

}

export interface DefaultValue {
  currencies: string[];
  realRate: number;
  euroRate: number;
  dolarRate: number;
}

export interface Props {
  children: React.ReactNode;
}

