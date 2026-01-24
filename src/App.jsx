import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Layout from './layout/Layout';
import LandingPage from './pages/LandingPage';
import AboutUsPage from './pages/AboutUsPage';
import ContactPage from './pages/ContactPage';
import PhotoPage from './pages/PhotoPage';
import PhotoCategory from './pages/PhotoCategory';
import PhotoGallery from './pages/PhotoGallery';
import ServicesPage from './pages/ServicesPage';

const App = () => {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<Layout />}>
        {/* Define your routes here */}
        <Route path='/home' element={<LandingPage />} />
        <Route path='/about' element={<AboutUsPage />} />
        <Route path='/contact' element={<ContactPage />} />
        <Route path='/media' element={<PhotoPage />} />
        <Route path='/media/category' element={<PhotoCategory />} />
        <Route path='/media/gallery' element={<PhotoGallery />} />
        <Route path='/services' element={<ServicesPage/>} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;