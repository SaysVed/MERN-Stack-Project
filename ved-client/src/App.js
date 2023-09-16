import './App.css';
import NewCard from './components/admin/createCard';
import {Routes, Route} from 'react-router-dom';
import HomePage from './components/homepage/HomePage';
import ContactPage from './components/homepage/Contact';

function App() {
  return (
    <>          
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/admin" element={<NewCard />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </>
  );
}
export default App;
