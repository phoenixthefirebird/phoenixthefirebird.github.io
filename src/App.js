import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
     <div>
       <Navbar />
     </div>
     <div>
        <About />
     </div>
     <div>
        <Footer />
     </div>
    </div>
  );
}

export default App;
