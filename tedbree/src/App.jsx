import Home from './Home';
import Intro from './Intro';
import Services from './Services';
import Testimonials from './Testimonials';
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
       

      </div>
      
    </div>
  );
}

export default App;
