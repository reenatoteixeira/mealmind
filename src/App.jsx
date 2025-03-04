import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import MyRecipes from './pages/MyRecipes.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path={'/'} element={<Home />}></Route>
        <Route path={'/login'} element={<Login />}></Route>
        <Route path={'/register'} element={<Register />}></Route>
        <Route path={'/recipes'} element={<MyRecipes />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
