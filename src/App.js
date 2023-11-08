import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

import Home from './Routes/Home';
import CarTable from './Routes/CarTable';
import CarShow from './Routes/CarShow';
import {  Routes, Route,  } from 'react-router-dom';
function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} exact/>
        <Route path='/cartable' element={<CarTable />} />
        <Route path='/carshow' element={<CarShow />} />
      </Routes>
      </>
  );
};

export default App;
