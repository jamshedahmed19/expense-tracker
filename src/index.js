import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {
  createMuiTheme,
  ThemeProvider,
} from "@material-ui/core/styles";
import serviceWorker from './serviceWorker';

const theme = createMuiTheme({
  typography: {
    fontFamily: "Raleway",
    h4: {
      lineHeight: "80px",
      fontWeight: "100",
      fontSize: "50px",
    },
    h3: {
      lineHeight: "80px",
      fontWeight: "500",
    },
  },
});

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);

serviceWorker;
