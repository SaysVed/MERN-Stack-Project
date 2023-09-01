import './App.css';
import NewCard from './components/admin/createCard';
import {Routes, Route} from 'react-router-dom';
import HomePage from './components/homepage/HomePage';
function App() {
  return (
    <>          
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/admin" element={<NewCard />} />
      </Routes>
    </>
  );
}
export default App;
