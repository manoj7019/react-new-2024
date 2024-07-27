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
import FormPage from './pages/FormPage';
import SuccessPage from './pages/SuccessPage';
import GetInTouchPage from './pages/GetInTouchPage';
import BecomeAPartnerPage from './pages/BecomeAPartnerPage';

const router = createBrowserRouter (
  createRoutesFromElements(
  <Route path='/' element={<MainLayout/>}>
    <Route index element={<HomePage/>}/>
    <Route path='/loans' element={<LoansPage/>}/>
    <Route path='/insurance' element={<InsurancePage/>}/>
    <Route path='/itServices' element={<ItServicesPage/>}/>
    <Route path='/realEstate' element={<RealEstatePage/>}/>
    <Route path='/contact' element={<ContactPage/>}/>
    <Route path='/form' element={<FormPage/>}/>
    <Route path='/getInTouch' element={<GetInTouchPage/>}/>
    <Route path='/becomeAPartner= ' element={<BecomeAPartnerPage/>}/>
    <Route path='/success' element={<SuccessPage/>}/>
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
