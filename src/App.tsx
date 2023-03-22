import React from 'react';
import  {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import { Main } from '../src/pages/main'
import { Login } from '../src/pages/login'
import { Navbar } from '../src/components/navbar'


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Main/>}/>
          <Route path='/login' element={<Login/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
