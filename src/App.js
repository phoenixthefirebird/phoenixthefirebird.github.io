import './App.css';
import Navbar from './components/Navbar';
import Center from './components/Center';
import Footer from './components/Footer';
import 'materialize-css/dist/js/materialize.min.js';
import {useEffect} from 'react';



function App() {

  // this is for jquery  
  useEffect(() => {
    const script = document.createElement('script');
  
    script.src = "http://code.jquery.com/jquery-latest.min.js";
    script.async = true;
  
    document.body.appendChild(script);
  
    return () => {
      document.body.removeChild(script);
    }
  }, []);

  return (
    <div className="App">
     <div>
       <Navbar />
     </div>
     <div>
        <Center />
     </div>
     <div>
        <Footer />
     </div>
    </div>
  );
}

export default App;
