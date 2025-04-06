import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Dashboard from './pages/Dashboard';
import Header from './components/Header';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="App">
    <BrowserRouter basename='dashbaord-react'>
    <Header />
      <div className='main d-flex'>
        <div className='sidebar-wrapper'>
          <Sidebar />
        </div>
        <div className='content'>
          <Routes>
            <Route path="/" exact={true} element={<Dashboard/>}/>
            <Route path="/Dashboard" exact={true} element={<Dashboard/>}/>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
    </div>
  );
}

export default App;