import React from 'react';
import NavBar from './components/NavBar/index.jsx';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

const Home = () => {
  return (
    <BrowserRouter>
      <div className='home'>
        <NavBar />
        <Routes>
          <Route
            path='/'
            element={<h1 className='heading__one'>React application!!!</h1>}
          ></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default Home;
