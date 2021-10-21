import { breakpointsMediaQuery } from './breakpointsMediaQuery';

export function propToStyle(propName) {
  // Retorna uma função que recebe as props do styled-components
  // e essa função retorna o valor da chave 'textAlign' no objeto 'props'
  return (props) => {
    // eslint-disable-next-line react/destructuring-assignment
    const propValue = props[propName];

    if (typeof propValue === 'string' || typeof propValue === 'number') {
      return {
        [propName]: props[propName],
      };
    }

    if (typeof propValue === 'object') {
      const breakpoints = {};

      if (propValue.xs) breakpoints.xs = { [propName]: propValue.xs };
      if (propValue.sm) breakpoints.sm = { [propName]: propValue.sm };
      if (propValue.md) breakpoints.md = { [propName]: propValue.md };
      if (propValue.lg) breakpoints.lg = { [propName]: propValue.lg };
      if (propValue.xl) breakpoints.xl = { [propName]: propValue.xl };

      return breakpointsMediaQuery(breakpoints);
    }

    return null;
  };
}
