
import './App.css';
import { BrowserRouter as Router, Route, Routes,Switch } from 'react-router-dom';
import Home from './components/Home';
import Celsius from './components/Celsius';
import Hour from './components/Hour';
import Length from './components/Length';
import Bytes from './components/Bytes';


function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />}/> 
        <Route path="/celsius" element={<Celsius />}/>
        <Route path="/hour" element={<Hour />}/>
        <Route path="/length" element={<Length />}/>
        <Route path="/bytes" element={<Bytes />}/>
      </Routes>
 </Router>
  );
}

export default App;