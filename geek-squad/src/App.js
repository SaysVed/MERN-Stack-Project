import './App.css';
import Footer from './components/common/Footer';
import Navbar from './components/common/Navbar';
import Card from './components/common/trial';
import NewCard from './components/admin/createCard';
function App() {
  return (
    
    <div className="min-h-screen flex">


      <div>
        <Navbar />
      </div>
       
      <div className="items-center justify-evenly flex">
        <Card />
      </div>

      <div>
        <Footer />
      </div>

      
    
    
    </div>
    
  );
}


export default App;
