import React from 'react';
import { InputWrapper, Input } from './styles/InputWrapper';

export function TextField({ placeholder, name, onChange, value, ...props }) {
  return (
    <InputWrapper>
      <Input
        placeholder={placeholder}
        name={name}
        onChange={onChange}
        value={value}
        {...props}
      />
    </InputWrapper>
  );
}
