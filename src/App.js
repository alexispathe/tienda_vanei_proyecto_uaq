import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/utils/Header';
import { Section } from './routers/sectionRoutes';
import { UserRoutes } from './routers/userRoutes';
import { Error } from './components/utils/Error';
import React from 'react';
import { ProductsProvider } from './context/ProductsProvider';
import { FirebaseProvider } from './context/FirebaseContext'; // Asegúrate de ajustar la ruta

function App() {
  return (
    <ProductsProvider>
      <FirebaseProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            {Section.map((route, i) => (
              <Route element={route.element} path={route.path} key={i} />
            ))}
            {UserRoutes.map((route, i) => (
              <Route element={route.element} path={route.path} key={i} />
            ))}
            <Route path='*' element={<Error />} />
          </Routes>
        </BrowserRouter>
      </FirebaseProvider>
    </ProductsProvider>
  );
}

export default App;
