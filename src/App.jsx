import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';

const Home = lazy(() => import('./pages/Home')),
  Login = lazy(() => import('./pages/Login')),
  Register = lazy(() => import('./pages/Register')),
  MyRecipes = lazy(() => import('./pages/MyRecipes')),
  NotFound = lazy(() => import('./pages/NotFound')),
  ProtectedRoute = lazy(() => import('./components/ProtectedRoute'));

function App() {
  return (
    <HelmetProvider>
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path={'/'} element={<Home />}></Route>
            <Route path={'/login'} element={<Login />}></Route>
            <Route path={'/register'} element={<Register />}></Route>
            <Route path={'*'} element={<NotFound />}></Route>

            <Route element={<ProtectedRoute />}>
              <Route path={'/recipes'} element={<MyRecipes />}></Route>
            </Route>
          </Routes>
        </Suspense>
      </Router>
    </HelmetProvider>
  );
}

export default App;
