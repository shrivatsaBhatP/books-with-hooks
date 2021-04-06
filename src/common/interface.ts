export interface InputProps {
  id?: string;
  type?: 'text';
  name?: string;
  value?: string | number | readonly string[];
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  onFocus?: React.FocusEventHandler<HTMLInputElement>;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
  width?: string;
  fontSize?: string;
  color?: string;
  placeholder?: string;
}

export interface TextProps {
  type: 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'label';
  theme?: 'unset' | 'default' | '';
  size?: 'default' | 'small' | 'medium' | 'large';
  fontWeight?: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
  color?: string;
}

export interface TableProps {}

export interface SearchProps extends InputProps {
  label?: string;
  onClick?: React.ChangeEventHandler<HTMLInputElement>;
}
