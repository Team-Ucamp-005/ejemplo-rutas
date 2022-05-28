import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './components/Home/Home';
import Movies from './components/Movies/Movies';
import Detail from './components/Detail/Detail'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} >
          <Route path="movies" element={<Movies />} />
          <Route path=":movieId" element={<Detail />} />
        </Route>

      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

