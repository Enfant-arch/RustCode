import { Provider as ReduxProvider } from 'react-redux';
import { QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider } from '@mui/material/styles';
import { I18nextProvider } from 'react-i18next';
import { store } from './store/store';
import { queryClient } from './queryClient';
import theme from './theme';
import i18n from './i18n';
import HelloWorld from './pages/helloWorld';
import { ErrorBoundary } from './components/ErrorBoundary';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginComponent from './pages/admin/autharization';
import Header from './components/user/Header';

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
                      <HelloWorld/> 
                    }
                  />
                  <Route path='/admin'
                  element={<LoginComponent/>}/>
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

