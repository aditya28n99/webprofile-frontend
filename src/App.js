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
import ProjectDetails from './pages/ProjectDetails';
import Home from './pages/Home';


function App() {
  return (
    <>
      <Router>
        <Navbarcomp />
        <Routes>
          <Route path='/' Component={Home} />
          <Route path='/projects' Component={Projects} />
          <Route path='/projects/:id' element={<ProjectDetails />}/>
          <Route path='/achivements' Component={Achivements} />
          <Route path='/blogs' Component={Blogs}/> {/* Pass postId as a prop if needed in elements */}
        </Routes>
      </Router>
    </>
  );
}
export default App;

