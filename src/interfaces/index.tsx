export interface LabelProps {
  // selectVal: string;
  // selectOnChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  type: string;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: number;
  placeholder?: string;
  text?: string;
  id: string;
  // selectName: string;
  // idSelect: string;
  // options: string[];
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

