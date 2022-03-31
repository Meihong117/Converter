
import './App.css';
import { BrowserRouter as Router, Route, Routes,Switch } from 'react-router-dom';
import React, {useState} from 'react'
import Celsius from './components/Celsius';
import Hour from './components/Hour';
import Length from './components/Length';
import Bytes from './components/Bytes';
import Navbar from './components/Navbar';
import Home from './components/Home';
import SideBar from './components/SideBar';

function App() {
  const [isOpen, setIsOpen] = useState(false)
    const toggle=()=>{
        setIsOpen(!isOpen)
    }
  return (
    <Router>
      <Navbar toggle={toggle}/>
      <SideBar isOpen={isOpen} toggle={toggle} />

      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/celsius" element={<Celsius />}/>
        <Route path="/hour" element={<Hour />}/>
        <Route path="/length" element={<Length />}/>
        <Route path="/bytes" element={<Bytes />}/>
      </Routes>
 </Router>
  );
}

export default App;
