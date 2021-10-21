import { css } from 'styled-components';
import { theme } from '../index';

const { breakpoints } = theme;

export function breakpointsMediaQuery(cssBreakpoints) {
  const breakpointsName = Object.keys(cssBreakpoints);

  // eslint-disable-next-line arrow-body-style
  return breakpointsName.map((breakpointName) => {
    return css`
      @media screen and (min-width: ${breakpoints[breakpointName]}px) {
        ${cssBreakpoints[breakpointName]}
      }
    `;
  });
}
