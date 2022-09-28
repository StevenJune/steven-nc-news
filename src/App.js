import logo from './logo.svg';
import "./App.css";
//import { useState, useEffect } from "react";
//import axios from "axios";
import {Route, Routes,BrowserRouter} from 'react-router-dom';
import Users from './components/Users.jsx'
import Topics from './components/Topics.jsx'
import AllArticles from './components/AllArticles.jsx'
import Nav from './components/Nav.jsx';
import Header from './components/Header.jsx'
import { useState, useEffect } from "react";

function App() {
  const [users, setUsers] = useState(['jessjelly']);

  return (
    <BrowserRouter>
    <div className= "App">
      <Header currentUser={users} />
      <Nav />
      <Routes>
        <Route path='/' element={<p>HOME !</p>} />
        <Route path='/Users' element={<Users currentUser={users} />} /> 
        <Route path='/Topics' element={<Topics />} />
        <Route path='/AllArticles' element={<AllArticles />} />

        {/* <Route path='/itemsByItemId/:item_id' element={<GetItemByItemId />} />
        <Route path='/api/items/create' element={<p>to be constructed</p>} />
        <Route path='/api/items/delete/:item_id' element={<p>to be constructed</p>} /> */}
        <Route path='*' element={<p>404 not found !</p>} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
