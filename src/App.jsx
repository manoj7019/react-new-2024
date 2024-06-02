import React from 'react'
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider
} from 'react-router-dom';
import MainLayout from '../src/layouts/MainLayout';
import HomePage from '../src/pages/HomePage';
import LoansPage from '../src/pages/LoansPage';
import InsurancePage from '../src/pages/InsurancePage';
import ItServicesPage from '../src/pages/ItServicesPage';
import RealEstatePage from '../src/pages/RealEstatePage';
import ContactPage from '../src/pages/ContactPage'
import NotFoundPage from './pages/NotFoundPage';

const router = createBrowserRouter (
  createRoutesFromElements(
  <Route path='/' element={<MainLayout/>}>
    <Route index element={<HomePage/>}/>
    <Route path='/loans' element={<LoansPage/>}/>
    <Route path='/insurance' element={<InsurancePage/>}/>
    <Route path='/itServices' element={<ItServicesPage/>}/>
    <Route path='/realEstate' element={<RealEstatePage/>}/>
    <Route path='/contact' element={<ContactPage/>}/>
    <Route path='*' element={<NotFoundPage/>}/>
  </Route>
  )
);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
