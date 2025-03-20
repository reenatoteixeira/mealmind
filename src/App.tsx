import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ComingSoon from './components/pages/ComingSoon.tsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ComingSoon />} />
      </Routes>
    </Router>
  );
}

export default App;
