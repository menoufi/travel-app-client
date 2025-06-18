import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './Landing';
import Cities from './Cities';
import CityDetails from './components/CityDetails';
import Login from './Login';
import CreateAccount from './CreateAccount';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/cities" element={<Cities />} />
        <Route path="/login" element={<Login />} />
       <Route path="/create-account" element={<CreateAccount />} />
        <Route path="/city/:cityName" element={<CityDetails />} />
      </Routes>
    </Router>
  );
}

export default App;






