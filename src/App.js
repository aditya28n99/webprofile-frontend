import './App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import Navbarcomp from './components/navcomponents/Navbar';
import Blogs from './pages/Blogs'
import Projects from './pages/Projects';
import Achivements from './pages/Achivements';
import Intro from './components/profileComponents/Intro';
// import Carousel from './components/profileComponents/Carousel';

function App() {
  return (
    <>
      <Router>
        <Navbarcomp />
        <Intro/>
        <Routes>
          <Route path='/' Component={Blogs} />
          <Route path='/blogs' Component={Blogs} />
          <Route path='/projects' Component={Projects} />
          <Route path='/achivements' Component={Achivements} />
          <Route path='/blogs' Component={Blogs} />
        </Routes>
      </Router>
    </>
  );
}
export default App;

