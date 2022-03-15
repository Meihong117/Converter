
import './App.css';
import { BrowserRouter as Router, Route, Routes,Switch } from 'react-router-dom';
import Celsius from './components/Celsius';
import Hour from './components/Hour';
import Length from './components/Length';
import Bytes from './components/Bytes';
import Navbar from './components/Navbar';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/celsius" element={<Celsius />}/>
        <Route path="/hour" element={<Hour />}/>
        <Route path="/length" element={<Length />}/>
        <Route path="/bytes" element={<Bytes />}/>
      </Routes>
 </Router>
  );
}

export default App;
