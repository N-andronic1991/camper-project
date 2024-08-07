import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import Loader from '../components/loader/Loader';
import css from './App.module.css';
import Navigation from '../components/navigation/Navigation';

const HomePage = lazy(() => import('../pages/homePage/HomePage'));
const CamperCatalogPage = lazy(() =>
  import('../pages/camperCatalogPage/CamperCatalogPage')
);
const MyFavoritesPage = lazy(() =>
  import('../pages/myFavoritesPage/MyFavoritesPage')
);
const NotFoundPage = lazy(() => import('../pages/notFoundPage/NotFoundPage'));

const App = () => {
  return (
    <div className={css.container}>
      <header className={css.header}>
        <Navigation />
      </header>
      <main>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/adverts" element={<CamperCatalogPage />} />
            <Route path="/favorites" element={<MyFavoritesPage />} />
            {/* <Route path="/catalog/:catalogId/*" element={<CamperDetailsPage />} /> */}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </main>
    </div>
  );
};

export default App;
