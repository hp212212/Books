import React, { lazy } from "react";
import Header from "./Components/Header";
import { Routes, Route } from 'react-router-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import Registration from "./Components/Registration";
import UserLogin from "./Components/UserLogin";
import Admin from "./Components/Admin";
import Admin1 from "./Components/Admin1";
import AdminPortal from "./Components/AdminPortal";
import Services from "./Components/Services";
import Home from "./Components/Home";
import AboutUs from "./Components/AboutUs";
import Paginations from "./Components/Paginations";
// const Home = lazy(() => import('./Components/Home'));
// const Admin = lazy(() => import('./Components/Admin'));
// const UserLogin = lazy(() => import('./Components/UserLogin'));
// const Registration = lazy(() => import('./Components/Registration'));
// const AdminPortal = lazy(() => import('./Components/AdminPortal'));

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="UserLogin" element={<UserLogin />} />
        <Route path="Registration" element={<Registration />} />
        <Route path="AdminPortal" element={<AdminPortal />} />
        <Route path="Admin" element={<Admin />} />
        <Route path="Admin1" element={<Admin1 />} />
        <Route path="Services" element={<Services />} />
        <Route path="AboutUs" element={<AboutUs />} />
        <Route path="Paginations" element={<Paginations />} />
        
      </Routes>

    </>
  );
}

export default App;
