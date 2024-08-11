import css from './App.module.css';
import { lazy, Suspense } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

import Loader from '../components/loader/Loader';
import Navigation from '../components/navigation/Navigation';
import Container from './container/Container';

const HomePage = lazy(() => import('../pages/homePage/HomePage'));
const CatalogPage = lazy(() => import('../pages/catalogPage/CatalogPage'));
const MyFavoritesPage = lazy(() =>
  import('../pages/myFavoritesPage/MyFavoritesPage')
);

const App = () => {
  return (
    <Container>
      <header className={css.header}>
        <Navigation />
      </header>
      <main>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/adverts" element={<CatalogPage />} />
            <Route path="/favorites" element={<MyFavoritesPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Suspense>
      </main>
    </Container>
  );
};

export default App;
