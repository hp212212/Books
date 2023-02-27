import React, { createContext, useEffect } from "react";
import Header from "./Components/Header";
import { Routes, Route } from 'react-router-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import Registration from "./Components/Registration";
import UserLogin from "./Components/UserLogin";
import Admin from "./Components/Admin";
import Books from "./Components/Books";
import Home from "./Components/Home";
import { ActiveAdmin, CurrentTitleList } from "./Context";
import { useState } from "react";
import { GetBookTitle } from "./Server/GETAxios";
import FlipPages from "./Components/FlipPages";
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
              <Route path="Admin" element={<Admin />} />
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
