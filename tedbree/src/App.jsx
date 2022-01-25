import Home from './Home';
import Intro from './Intro';
import Services from './Services';
import Testimonials from './Testimonials';
import Contact from './Contact';
import Project from './Project';
import Consultants from './Consultants';
import About from './About';
import Contact2 from './Contact2';
import Footer from './Footer';
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
        <Consultants/>
        <About/>
        <Contact2/>
        <Footer/>
       

      </div>
      
    </div>
  );
}

export default App;
