export interface LabelProps {
  type: string;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: number;
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
  toCurrency: string;
  fromValue: string;
  toValue: string;
}

export interface CurrenciesResults {

}

export interface DefaultValue {
  currencies: string[];
}

export interface Props {
  children: React.ReactNode;
}

