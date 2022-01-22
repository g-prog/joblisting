import Home from './Home';
import Intro from './Intro';
import Services from './Services';
import Testimonials from './Testimonials';
import Contact from './Contact';
import Project from './Project';
import "./App.css"

function App() {
  return (
    <div className="App">
      <div className="top">
        <Home/>
        

      </div>


      <div className="sections">
        <Intro/>
        <Services/>
        <Testimonials/>
        <Contact/>
        <Project/>
       

      </div>
      
    </div>
  );
}

export default App;
