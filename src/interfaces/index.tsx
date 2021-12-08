export interface InputProps {
  type: string;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  placeholder?: string;
  text: string;
  id: string;
}

export interface CardProps {
  fromCurrency: string;
  toCurrency: string;
  fromValue: string;
  toValue: string;
}
