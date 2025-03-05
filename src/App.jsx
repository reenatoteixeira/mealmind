import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import MyRecipes from './pages/MyRecipes.jsx';
import NotFound from './pages/NotFound.jsx';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <Routes>
          <Route path={'/'} element={<Home />}></Route>
          <Route path={'/login'} element={<Login />}></Route>
          <Route path={'/register'} element={<Register />}></Route>
          <Route path={'/recipes'} element={<MyRecipes />}></Route>
          <Route path={'*'} element={<NotFound />}></Route>
        </Routes>
      </Router>
    </HelmetProvider>
  );
}

export default App;
