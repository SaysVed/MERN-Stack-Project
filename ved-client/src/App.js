import './App.css';
import Footer from './components/common/Footer';
import Navbar from './components/common/Navbar';
import Card from './components/common/trial';
import NewCard from './components/admin/createCard';
import {Routes, Route} from 'react-router-dom';
import BucketPage from './components/bucket/BucketPage'
import HomePage from './components/homepage/HomePage';
function App() {
  return (
    <>          
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/admin" element={<NewCard />} />
        <Route path='/bucket' element={<BucketPage />} />
      </Routes>
      
    </>
  );
}


export default App;
