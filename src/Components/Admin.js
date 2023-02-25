import React from 'react';
import { GetAdminData } from '../Server/GETAxios';
// import { PutAdminPersonData } from '../Server/PUTAxios';
import { ToastContainer, toast } from 'react-toastify';
import '../../node_modules/react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { ActiveAdmin } from '../Context';

const Admin = () => {
    const { setActiveAdmin } = useContext(ActiveAdmin)
    let [Data, setData] = useState({})
    useEffect(() => {
        GetAdminData().then((result) => { setData(result) })
    }, [])
    let lo = -1
    const navigate = useNavigate()
    const HideShow = (enent) => {
        let tt = document.getElementById("password")
        let type = tt.getAttribute("type") === "password" ? "text" : "password";
        tt.setAttribute("type", type)
        let e = document.getElementById("show-password")
        let eye = e.getAttribute("class") === "fa-solid fa-eye" ? "fa-solid fa-eye-slash" : "fa-solid fa-eye";
        e.setAttribute("class", eye)
    }
    const Login = () => {
        console.log(Data)
        let uname = document.getElementById("uname").value
        let password = document.getElementById("password").value
        for (let i = 0; i < Data.length; i++) {
            if (uname === Data[i].uname && password === Data[i].password) {
                lo = i
            }
        }
        if (lo === -1) {
            toast.warn("Either User Name or Password Incorrect!!!!!", {
                position: "top-center",
                autoClose: 1000,
                theme: "dark",
            });
        } else {
            setActiveAdmin(Data[lo])
            navigate("/AdminPortal")
            // window.location.href = "AdminPortal";
        }
    }
    return (
        <>
            <div class="d-block" id="Loginpage">
                <div class="bg-success pb-5">
                    <div class="container" style={{ width: "40%" }}>
                        <h1 class="text-center text-white">Admin Login</h1>
                        <form id="form">
                            <div class="mb-3">
                                <label class="form-label text-white">User Name</label>
                                <input type="text" class="form-control" id="uname" placeholder='User Name' />
                            </div>
                            <div class="mb-3 ">
                                <label for="exampleInputPassword1" class="form-label text-white">Password</label>
                                <div class="eyesetting">
                                    <input type="password" class="form-control" name="password" id="password" placeholder='Password' />
                                    <i class="fa-solid fa-eye" id="show-password" onClick={HideShow}></i>
                                </div>
                            </div>
                            <button type="button" class="btn btn-primary" onClick={Login}>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </>
    )
}

export default Admin;