const lightMode = {
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
};

const darkMode = {
  colors: {
    primary: '#3F77DF',
    secondary: '#84A5E3',
    primaryBackground: '#2A2B33',
    secondaryBackground: '#2D2E36',
    tertiaryBackground: '#373842',
    border: '#212228',
    primaryText: '#FFFFFF',
    secondaryText: '#191919',
  },
};

const typographyVariants = {
  title: {
    fontSize: '40px',
    fontWeight: '700',
    lineHeight: 1.25, // 125%
  },
  title2: {
    fontSize: '24px',
    fontWeight: '700',
    lineHeight: 1.25, // 125%
  },
  subtitle: {
    fontSize: '18px',
    fontWeight: '600',
    lineHeight: 1.25, // 125%
  },
  paragraph1: {
    fontSize: '16px',
    fontWeight: '500',
    lineHeight: 1.25, // 125%
  },
  paragraph2: {
    fontSize: '16px',
    fontWeight: '400',
    lineHeight: 1.25, // 125%
  },
  paragraph3: {
    fontSize: '14px',
    fontWeight: '400',
    lineHeight: 1.25, // 125%
  },
};

const breakpoints = {
  xs: 0, // extra small
  sm: 480, // small
  md: 768, // medium
  lg: 992, // large
  xl: 1200, // extra large
};

export const theme = {
  lightMode,
  darkMode,
  typographyVariants,
  breakpoints,
  borderRadius: '4px',
  fontFamily: "'Poppins', sans-serif",
  transition: '300ms ease-in-out',
};
