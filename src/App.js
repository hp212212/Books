import React, { createContext, lazy, useEffect } from "react";
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
import Books from "./Components/Books";
import Home from "./Components/Home";
import AboutUs from "./Components/AboutUs";
import { ActiveAdmin, CurrentTitleList } from "./Context";
import { useState } from "react";
import { GetBookTitle } from "./Server/GETAxios";
import FlipPages from "./Components/FlipPages";
// const Home = lazy(() => import('./Components/Home'));
// const Admin = lazy(() => import('./Components/Admin'));
// const UserLogin = lazy(() => import('./Components/UserLogin'));
// const Registration = lazy(() => import('./Components/Registration'));
// const AdminPortal = lazy(() => import('./Components/AdminPortal'));
export const ActiveLogin = createContext()

function App() {
  const [activeadmin, setActiveAdmin] = useState({})
  const [UpdateAll, setUpdateAll] = useState(0)
  const [currentTitleList, setCurrentTitleList] = useState([])
  const [seebookindex, setSeebookindex] = useState(0)
  const [activelogin, setActiveLogin] = useState(-1)
  useEffect(() => {
    GetBookTitle().then((result) => { setCurrentTitleList(result) })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    console.log("App")
  }, [UpdateAll])
  return (
    <>
      <ActiveLogin.Provider value={{ setActiveLogin, activelogin }}>
        <ActiveAdmin.Provider value={{ activeadmin, setActiveAdmin, UpdateAll, setUpdateAll }}>
          <CurrentTitleList.Provider value={{ currentTitleList, setSeebookindex, seebookindex }}>
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="UserLogin" element={<UserLogin />} />
              <Route path="Registration" element={<Registration />} />
              <Route path="AdminPortal" element={<AdminPortal />} />
              <Route path="Admin" element={<Admin />} />
              <Route path="Admin1" element={<Admin1 />} />
              <Route path="AboutUs" element={<AboutUs />} />
              <Route path="Books" element={<Books />} />
              <Route path="/Books/FlipPages" element={<FlipPages />} />
            </Routes>
          </CurrentTitleList.Provider>
        </ActiveAdmin.Provider>
      </ActiveLogin.Provider>
    </>
  );
}

export default App;
