import './App.css';
import Home from './Components/Home/Home';
import RouteLayout from './Pages/RouteLayout';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import ToDopages from './Pages/ToDopages/ToDopages';
import Countries from './Pages/ToDopages/Countries/Countries';
import ErrorPage from './Pages/ErrorPage/ErrorPage';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<RouteLayout />}>
      <Route index  element={<Home/>}/>
      <Route path='Todo'  element={<ToDopages/>}/>
      <Route path='Countries'  element={<Countries/>}/>
      <Route path="*" element={<ErrorPage />} />
      </Route>
    
    </Routes>
    </BrowserRouter>
  );
}

export default App;
