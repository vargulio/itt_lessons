import './App.css';
import HomePage from './pages/Home';
import {Routes, Route, Navigate } from 'react-router-dom';
import DetailsPage from './pages/Details';

function App() {
  return (
    <Routes>
      <Route index element={<Navigate to={'/home'}/>}></Route>
      <Route path={'/home'} element={<HomePage/>}></Route>
      <Route path={'/details/:id'} element={<DetailsPage/>}></Route>
      <Route path={'*'} element={<div>NOT FOUND BRAT</div>}></Route>
    </Routes>
  );
}

export default App;
