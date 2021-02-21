import './App.css';
import Navbar from './components/Navbar';
import Center from './components/Center';
import Footer from './components/Footer';
import 'materialize-css/dist/js/materialize.min.js';

function App() {
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
