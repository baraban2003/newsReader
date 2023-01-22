import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import NewsItemLarge from './components/NewsItemLarge/NewsItemLarge';

const HomePage = lazy(() => import('./views/HomePage/HomePage'));

const App = () => {
  return (
    <Routes>
      <Route path="/">
        <Route
          index
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <HomePage />
            </Suspense>
          }
        />

        <Route path="/:id/*"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <NewsItemLarge />
            </Suspense>
          }
        />
        <Route
          path="*"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <HomePage />
            </Suspense>
          }
        />
      </Route>
    </Routes>
  );
};
export default App;
