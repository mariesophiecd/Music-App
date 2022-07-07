import React from 'react';
import {Charts, About, Home} from './pages';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './layouts';
import { ChartsProvider } from './context/ChartsContext';
import {useSelector, useDispatch} from 'react-redux';

const App = () => {




  return(
    <ChartsProvider>    
      <Routes>
        <Route path='/' element={<Layout />} >
          <Route path='/' element={<Home />} />
          <Route path='/charts' element={<Charts />}  />
          <Route path='/about' element={<About />} />
        </Route>
      </Routes>
    </ChartsProvider>
  )
}




export default App;
