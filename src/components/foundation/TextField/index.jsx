import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';

import { Box } from '../Box';
import { InputWrapper, Input } from './styles/InputWrapper';
import { Text } from '../Text';
import { Button } from '../../common/Button';

export function TextField({
  placeholder,
  name,
  onChange,
  value,
  icon,
  action,
  onActionClick,
  register,
  error,
  ...props
}) {
  const { colors } = useContext(ThemeContext);
  const isFieldInvalid = Boolean(error);

  return (
    <Box>
      <InputWrapper hasIcon={Boolean(icon)} isFieldInvalid={isFieldInvalid}>
        {icon}
        {register ? (
          <Input
            as="input"
            color="secondaryText"
            placeholder={placeholder}
            name={name}
            onChange={onChange}
            value={value}
            {...register(name)}
            {...props}
          />
        ) : (
          <Input
            // as="input"
            placeholder={placeholder}
            name={name}
            onChange={onChange}
            value={value}
            {...props}
          />
        )}
        {action && (
          <Button color={colors.primary} onClick={onActionClick} ghost>
            {action}
          </Button>
        )}
      </InputWrapper>

      {isFieldInvalid && (
        <Text variant="smallestException" color="red">
          {error.message}
        </Text>
      )}
    </Box>
  );
}
