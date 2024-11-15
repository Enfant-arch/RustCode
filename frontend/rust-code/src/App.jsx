// src/App.jsx
import React from 'react';

import { Provider as ReduxProvider } from 'react-redux';
import { QueryClientProvider } from 'react-query';
import { ThemeProvider } from '@mui/material/styles';
import { I18nextProvider } from 'react-i18next';
import { store } from './store/store';
import { queryClient } from './queryClient';
import theme from './theme';
import i18n from './i18n';
import { ErrorBoundary } from './components/ErrorBoundary';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <ErrorBoundary>
      <ReduxProvider store={store}>
        <QueryClientProvider client={queryClient}>
          <ThemeProvider theme={theme}>
            <I18nextProvider i18n={i18n}>
              <Router>
                <Routes>
                  <Route
                    path="/"
                    element={
                      <div>
                        <h1>{i18n.t('greeting')}</h1>
                        <button onClick={() => store.dispatch({ type: 'counter/increment' })}>
                          Increment
                        </button>
                        <p>Count: {store.getState().counter.count}</p>
                      </div>
                    }
                  />
                </Routes>
              </Router>
            </I18nextProvider>
          </ThemeProvider>
        </QueryClientProvider>
      </ReduxProvider>
    </ErrorBoundary>
  );
}

export default App;

