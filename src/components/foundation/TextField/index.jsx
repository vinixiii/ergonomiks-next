import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
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
  const { colors } = useContext(ThemeContext);

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
      {action && (
        <Button color={colors.primary} ghost>
          {action}
        </Button>
      )}
    </InputWrapper>
  );
}
