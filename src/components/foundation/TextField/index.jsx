import React from 'react';
import { Button } from '../../common/Button';
import { InputWrapper, Input } from './styles/InputWrapper';

export function TextField({
  placeholder,
  name,
  onChange,
  value,
  icon,
  action,
  ...props
}) {
  return (
    <InputWrapper hasIcon={Boolean(icon)}>
      {icon}
      <Input
        placeholder={placeholder}
        name={name}
        onChange={onChange}
        value={value}
        {...props}
      />
      {action && <Button ghost>{action}</Button>}
    </InputWrapper>
  );
}
