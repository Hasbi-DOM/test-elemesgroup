import { createTheme } from "@mui/material/styles";

var theme = createTheme({
  typography: {
    h1: {
      fontSize: '48px',
      fontFamily: 'Open Sans, sans-serif',
      fontWeight: '600',
	  color: '#FFF'
    },
    h2: {
      fontSize: '32px',
      fontFamily: 'Open Sans, sans-serif',
      fontWeight: '700',
	  color: '#FFF'
    },
    h3: {
      fontSize: '20px',
      fontFamily: 'Roboto, sans-serif',
      fontWeight: '400',
	  color: '#FFF'
    },
    h4: {
      fontSize: '18px',
      fontFamily: 'Inter, sans-serif',
      fontWeight: '700',
	  color: '#B6B6B6'
    },
    h5: {
      fontSize: '14px',
      fontFamily: 'Roboto, sans-serif',
      fontWeight: '700',
	  color: '#FFF'
    },
    h6: {
      fontSize: '12px',
      fontFamily: 'Inter, sans-serif',
      fontWeight: '400',
	  color: '#828282'
    },
    body: {
		fontSize: '8px',
		fontFamily: 'Roboto, sans-serif',
		fontWeight: '400',
		color: '#FFF'
    },
    caption: {
      fontSize: '14px',
      fontFamily: 'Roboto, sans-serif',
      fontWeight: '400',
	  color: '#FFF'
    },
    button: {
      fontSize: '14px',
      fontFamily: 'Open Sans, sans-serif',
      fontWeight: '600',
      textTransform: "none",
    }
  },
});

export default theme