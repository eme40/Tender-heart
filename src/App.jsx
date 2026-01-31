import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./layout/Layout";
import LandingPage from "./pages/LandingPage";
import AboutUsPage from "./pages/AboutUsPage";
import ContactPage from "./pages/ContactPage";
import PhotoPage from "./pages/PhotoPage";
import PhotoCategory from "./pages/PhotoCategory";
import PhotoGallery from "./pages/PhotoGallery";
import ServicesPage from "./pages/ServicesPage";
import ErrorPage from "./pages/ErrorPage";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Layout />} errorElement={<ErrorPage />}>
          <Route index element={<LandingPage />} />
          <Route path="home" element={<LandingPage />} />
          <Route path="about" element={<AboutUsPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="media" element={<PhotoPage />} />
          <Route path="media/category" element={<PhotoCategory />} />
          <Route path="media/gallery" element={<PhotoGallery />} />
          <Route path="services" element={<ServicesPage />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
