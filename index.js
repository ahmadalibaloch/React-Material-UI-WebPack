import React from 'react';
import ReactDOM from 'react-dom';
import App from './src/app.jsx';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';

const theme = createMuiTheme();

function AppRoot() {
  return (
    <MuiThemeProvider theme={theme}>
      <App />
    </MuiThemeProvider>
  );
}

ReactDOM.render(
  <AppRoot />,
  document.getElementById('app')
);