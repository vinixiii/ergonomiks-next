import styled, { css } from 'styled-components';
import { breakpointsMediaQuery } from '../../../theme/utils/breakpointsMediaQuery';
import { propToStyle } from '../../../theme/utils/propToStyle';

const Container = styled.div`
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  max-width: initial;

  ${breakpointsMediaQuery({
    sm: css`
      max-width: 576px;
    `,
    md: css`
      max-width: 768px;
    `,
    lg: css`
      max-width: 1160px;
    `,
    xl: css`
      max-width: 1222px;
    `,
  })}

  ${propToStyle('display')};
  ${propToStyle('flex')};
  ${propToStyle('alignItems')};
  ${propToStyle('marginTop')};
  ${propToStyle('height')};
  ${propToStyle('maxHeight')};
`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;

  ${propToStyle('flex')};
  ${propToStyle('alignItems')};
  ${propToStyle('justifyContent')};
  ${propToStyle('position')};
  ${propToStyle('margin')};
  ${propToStyle('marginTop')};
  ${propToStyle('marginBottom')};
  ${propToStyle('padding')};
  ${propToStyle('flexWrap')};
  ${propToStyle('height')};
  ${propToStyle('maxHeight')};
`;

const Column = styled.div`
  padding-right: 16px;
  padding-left: 16px;
  flex-basis: 0;
  flex-grow: 1;
  max-width: 100%;

  ${({ value }) => {
    if (typeof value === 'number') {
      return css`
        flex-grow: 0;
        flex-shrink: 0;
        flex-basis: ${(100 * value) / 12}%;
        max-width: ${(100 * value) / 12}%;
      `;
    }

    return breakpointsMediaQuery({
      xs: value?.xs
        ? css`
            flex-grow: 0;
            flex-shrink: 0;
            flex-basis: ${(100 * value.xs) / 12}%;
            max-width: ${(100 * value.xs) / 12}%;
          `
        : '',
      sm: value?.sm
        ? css`
            flex-grow: 0;
            flex-shrink: 0;
            flex-basis: ${(100 * value.sm) / 12}%;
            max-width: ${(100 * value.sm) / 12}%;
          `
        : '',
      md: value?.md
        ? css`
            flex-grow: 0;
            flex-shrink: 0;
            flex-basis: ${(100 * value.md) / 12}%;
            max-width: ${(100 * value.md) / 12}%;
          `
        : '',
      lg: value?.lg
        ? css`
            flex-grow: 0;
            flex-shrink: 0;
            flex-basis: ${(100 * value.lg) / 12}%;
            max-width: ${(100 * value.lg) / 12}%;
          `
        : '',
      xl: value?.xl
        ? css`
            flex-grow: 0;
            flex-shrink: 0;
            flex-basis: ${(100 * value.xl) / 12}%;
            max-width: ${(100 * value.xl) / 12}%;
          `
        : '',
    });
  }};

  ${({ offset }) => {
    if (typeof offset === 'number') {
      return css`
        margin-left: ${(100 * offset) / 12}%;
      `;
    }
    return breakpointsMediaQuery({
      xs: offset?.xs
        ? css`
            margin-left: ${(100 * offset.xs) / 12}%;
          `
        : '',
      sm: offset?.sm
        ? css`
            margin-left: ${(100 * offset.sm) / 12}%;
          `
        : '',
      md: offset?.md
        ? css`
            margin-left: ${(100 * offset.md) / 12}%;
          `
        : '',
      lg: offset?.lg
        ? css`
            margin-left: ${(100 * offset.lg) / 12}%;
          `
        : '',
      xl: offset?.xl
        ? css`
            margin-left: ${(100 * offset.xl) / 12}%;
          `
        : '',
    });
  }};

  ${breakpointsMediaQuery({
    lg: css`
      ${propToStyle('maxWidth')}
    `,
  })}

  ${propToStyle('display')};
  ${propToStyle('flex')};
  ${propToStyle('flexDirection')};
  ${propToStyle('alignItems')};
  ${propToStyle('justifyContent')};
  ${propToStyle('paddingTop')};
  ${propToStyle('paddingBottom')};
  ${propToStyle('gap')};
  ${propToStyle('textAlign')};
  ${propToStyle('height')};
  ${propToStyle('maxHeight')};
  ${propToStyle('padding')};
`;

export const Grid = {
  Container,
  Row,
  Column,
};
