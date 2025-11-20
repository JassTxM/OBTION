import React from "react";
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import Home from '../pages/Home.jsx';
import Support from '../pages/Support.jsx';
import About from '../pages/About.jsx';
import FAQ from '../pages/FAQ.jsx';
import Login from '../pages/Login.jsx';
import Signup from '../pages/Signup.jsx';
import Workspace from '../pages/Workspace.jsx';
import Header from './Header.jsx';
import Footer from './Footer.jsx';

const MainLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/support" element={<Support />} />
          <Route path="/about" element={<About />} />
          <Route path="/faq" element={<FAQ />} />
        </Route>
        
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/workspace" element={<Workspace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;