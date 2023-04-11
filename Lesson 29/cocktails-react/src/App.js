import './App.scss';
import HomePage from './pages/Home';
import { Routes, Route, Navigate } from 'react-router-dom';
import DetailsPage from './pages/Details';
import Navigation from './components/Navigation/Navigation';
import NestedComponent from './components/NestedComponent/NestedComponent';
import ProfilePage from './pages/Profile';

function App() {

  return <>
    <Navigation />
    <Routes>
      <Route index element={<Navigate to={'/cocktails'} />}></Route>
      <Route path="/cocktails" element={<NestedComponent/>}>
        <Route path={'catalog'} element={<HomePage />}></Route>
        <Route path={'details/:id'} element={<DetailsPage />}></Route>
      </Route>      
      <Route path="/profile" element={<ProfilePage/>}/>
      <Route path={'/filters'} element={<div>Filters screen</div>}></Route>
      <Route path={'*'} element={<div>NOT FOUND BRAT</div>}></Route>
    </Routes>
  </>;
}

export default App;
