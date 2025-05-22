import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import SubpageLayout from './layouts/SubpageLayout';
import RoomieSplit from './pages/portfolio/RoomieSplit';
import CollegePlanner from './pages/portfolio/CollegePlanner';
import PersonalWebsite from './pages/portfolio/PersonalWebsite';
import SlowedAndReverb from './pages/portfolio/SlowedAndReverb';



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
          {/* Portfolio subpages */}
            <Route path="/portfolio/personalwebsite" element={<PersonalWebsite />} />
            <Route path="/portfolio/roomiesplit" element={<RoomieSplit />} />
            <Route path="/portfolio/collegeplanner" element={<CollegePlanner />} />
            <Route path="/portfolio/slowedandreverb" element={<SlowedAndReverb />} />

        </Route>
      </Routes>
    </Router>
  );
}

export default App;