import Home from './Home';
import Intro from './Intro';
import Services from './Services';
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
       

      </div>
      
    </div>
  );
}

export default App;
