import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.jsx';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme';

ReactDOM.render(<ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>, document.getElementById('root'));
