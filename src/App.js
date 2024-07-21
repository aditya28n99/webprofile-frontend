import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Navbarcomp from './components/navcomponents/Navbar';
import Blogs from './pages/Blogs';
import Projects from './pages/Projects';
import Achivements from './pages/Achivements';
import ProjectDetails from './pages/ProjectDetails';
import Home from './pages/Home';
import BlogDetails from './pages/BlogDetails';
import Scrollbtn from './components/profileComponents/ScrollBtn';
import Footer from './components/profileComponents/Footer';


function App() {
  return (
    <Router>
        <div className="sun">
          <div className="sun-core"></div>
          <div className="sun-rays"></div>
        </div>
        <Navbarcomp />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/projects/:id' element={<ProjectDetails />} />
          <Route path='/achievements' element={<Achivements />} />
          <Route path='/blogs' element={<Blogs />} />
          <Route path='/blogs/:postId' element={<BlogDetails />} />
        </Routes>
        <Footer/>
        <Scrollbtn/>
    </Router>
  );
}

export default App;
