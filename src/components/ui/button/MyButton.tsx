import React, { ButtonHTMLAttributes, DetailedHTMLProps, FC } from 'react';
import './MyButton.css';

const MyButton: FC<DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>> = ({
  children,
  ...props
}) => {
  return (
    <button {...props} className="myBth">
      {children}
    </button>
  );
};

export default MyButton;
