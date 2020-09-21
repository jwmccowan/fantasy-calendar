import { CssBaseline, MuiThemeProvider, StylesProvider } from '@material-ui/core';
import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { App } from './components/App';
import { dark } from './themes';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:3333/graphql',
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <React.StrictMode>
    <StylesProvider injectFirst>
      <MuiThemeProvider theme={dark}>
        <ThemeProvider theme={dark}>
          <ApolloProvider client={client}>
            <CssBaseline />
            <App />
          </ApolloProvider>
        </ThemeProvider>
      </MuiThemeProvider>
    </StylesProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
