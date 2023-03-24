import React from 'react';
import  {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import { Main } from '../src/pages/main'
import { Login } from '../src/pages/login'
import { Navbar } from '../src/components/navbar'
import { Profile } from '../src/pages/profile'
import { CreatePost } from './pages/create-post/create-post';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Main/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/profile' element={<Profile/>}/>
          <Route  path='/createpost' element={<CreatePost/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
