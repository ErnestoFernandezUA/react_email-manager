import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './app/store';
import { LoginPage } from './pages/LoginPage/LoginPage';
import './App.scss';

export const App: React.FC = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <LoginPage />
            }
          />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};
