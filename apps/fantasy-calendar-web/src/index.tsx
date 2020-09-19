import { CssBaseline, MuiThemeProvider, StylesProvider } from '@material-ui/core';
import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { App } from './components/App';
import { dark } from './themes';

import favicon from './favicon.ico';

ReactDOM.render(
    <React.StrictMode>
        <StylesProvider injectFirst>
            <MuiThemeProvider theme={dark}>
                <ThemeProvider theme={dark}>
                    <CssBaseline />
                    <App />
                </ThemeProvider>
            </MuiThemeProvider>
        </StylesProvider>
    </React.StrictMode>,
    document.getElementById('root'),
);
