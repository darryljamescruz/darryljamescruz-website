import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import SubpageLayout from './layouts/SubpageLayout';

function App() {
  return (
    <Router>
      <Routes>
        {/* No navbar on homepage */}
        <Route path='/' element={<Home />} />

        {/* All other pages go inside the layout with Navbar */}
        <Route element={<SubpageLayout />}>
          <Route path='/about' element={<About />} />
          <Route path='/portfolio' element={<Portfolio />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;