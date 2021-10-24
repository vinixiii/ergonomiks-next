import { typographyVariants } from './typography';
import { breakpoints } from './breakpoints';

export const lightMode = {
  title: 'lightMode',
  colors: {
    primary: '#3F77DF',
    secondary: '#84A5E3',
    primaryBackground: '#FFFFFF',
    secondaryBackground: '#FEFDFF',
    tertiaryBackground: '#F8F9FD',
    border: '#D6D6D6',
    primaryText: '#2F2E41',
    secondaryText: '#7A7A7A',
  },
  typographyVariants,
  breakpoints,
  borderRadius: '4px',
  fontFamily: "'Poppins', sans-serif",
  transition: '300ms ease-in-out',
  boxShadow: '0px 1px 4px rgba(0, 0, 0, 0.25)',
};

export const darkMode = {
  title: 'darkMode',
  colors: {
    primary: '#3F77DF',
    secondary: '#84A5E3',
    primaryBackground: '#2A2B33',
    secondaryBackground: '#2D2E36',
    tertiaryBackground: '#373842',
    border: '#212228',
    primaryText: '#FFFFFF',
    secondaryText: '#c4c4c4',
  },
  typographyVariants,
  breakpoints,
  borderRadius: '4px',
  fontFamily: "'Poppins', sans-serif",
  transition: '300ms ease-in-out',
  boxShadow: '0px 1px 4px rgba(0, 0, 0, 0.25)',
};
