import { createTheme } from '@mui/material/styles';

// Indian Flag Theme Color Constants
const COLORS = {
  // Primary - Saffron
  saffron: '#FF9933',
  saffronLight: '#FFF5EB',
  saffronDark: '#E68A2E',
  
  // Secondary - India Green  
  indiaGreen: '#138808',
  indiaGreenLight: '#E8F5E9',
  indiaGreenDark: '#0F6B06',
  
  // Neutrals
  white: '#FFFFFF',
  navy: '#1a1a2e',
  charcoal: '#4a4a4a',
  
  // UI Colors
  border: '#e0e0e0',
  background: '#f8f9fa',
};

export const ThemeSettings = (themeLists = {}) => {
  return createTheme({
    typography: {
      fontFamily: "'Barlow', sans-serif",
      h1: {
        fontWeight: 700,
        color: COLORS.navy,
      },
      h2: {
        fontWeight: 600,
        color: COLORS.navy,
      },
      h3: {
        fontWeight: 600,
        color: COLORS.navy,
      },
      h4: {
        fontWeight: 600,
        color: COLORS.navy,
      },
      h5: {
        fontWeight: 600,
        color: COLORS.navy,
      },
      h6: {
        fontWeight: 600,
        color: COLORS.navy,
      },
      body1: {
        color: COLORS.charcoal,
      },
      body2: {
        color: COLORS.charcoal,
      },
    },
    paletteSecondary: {
      basecolorCode: {
        main: themeLists.basecolorCode || COLORS.saffron,
        secondary: themeLists.basecolorCode || COLORS.saffronLight,
      },
      colorCode: {
        main: themeLists.colorCode || COLORS.navy,
        secondary: themeLists.colorCode || COLORS.charcoal,
      },
      lightblackcolorCode: {
        main: themeLists.lightblackcolorCode || COLORS.navy,
      },
      shadowcolorCode: {
        main: themeLists.shadowcolorCode || COLORS.saffronLight,
      },
      whitecolorCode: {
        main: themeLists.whitecolorCode || COLORS.white,
      },
      footertextcolorCode: {
        main: '#e8f5e9'
      }
    },
    palette: {
      primary: {
        main: COLORS.saffron,
        light: COLORS.saffronLight,
        dark: COLORS.saffronDark,
        contrastText: COLORS.white,
      },
      secondary: {
        main: COLORS.indiaGreen,
        light: COLORS.indiaGreenLight,
        dark: COLORS.indiaGreenDark,
        contrastText: COLORS.white,
      },
      basecolorCode: {
        main: themeLists.basecolorCode || COLORS.saffron,
        secondary: themeLists.basecolorCode || COLORS.saffronLight,
      },
      colorCode: {
        main: themeLists.colorCode || COLORS.navy,
        secondary: themeLists.colorCode || COLORS.charcoal,
      },
      lightblackcolorCode: {
        main: themeLists.lightblackcolorCode || COLORS.navy,
      },
      shadowcolorCode: {
        main: themeLists.shadowcolorCode || COLORS.saffronLight,
      },
      whitecolorCode: {
        main: themeLists.whitecolorCode || COLORS.white,
      },
      footertextcolorCode: {
        main: '#e8f5e9'
      },
      // Additional Indian Flag theme colors
      saffron: {
        main: COLORS.saffron,
        light: COLORS.saffronLight,
        dark: COLORS.saffronDark,
      },
      indiaGreen: {
        main: COLORS.indiaGreen,
        light: COLORS.indiaGreenLight,
        dark: COLORS.indiaGreenDark,
      },
      navy: {
        main: COLORS.navy,
      },
      background: {
        default: COLORS.white,
        paper: COLORS.white,
      },
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: 'none',
            fontWeight: 600,
            borderRadius: '8px',
          },
          containedPrimary: {
            backgroundColor: COLORS.saffron,
            '&:hover': {
              backgroundColor: COLORS.saffronDark,
            },
          },
          containedSecondary: {
            backgroundColor: COLORS.indiaGreen,
            '&:hover': {
              backgroundColor: COLORS.indiaGreenDark,
            },
          },
          outlinedPrimary: {
            borderColor: COLORS.saffron,
            color: COLORS.saffron,
            '&:hover': {
              backgroundColor: COLORS.saffronLight,
              borderColor: COLORS.saffron,
            },
          },
          outlinedSecondary: {
            borderColor: COLORS.indiaGreen,
            color: COLORS.indiaGreen,
            '&:hover': {
              backgroundColor: COLORS.indiaGreenLight,
              borderColor: COLORS.indiaGreen,
            },
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            borderRadius: '12px',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
          },
        },
      },
      MuiAppBar: {
        styleOverrides: {
          root: {
            backgroundColor: COLORS.saffron,
          },
        },
      },
    },
  });
};

export { COLORS };
export default ThemeSettings;
