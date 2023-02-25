import React, { useContext, useState } from 'react';
import { GetUsersData } from '../Server/GETAxios';
import { ToastContainer, toast } from 'react-toastify';
import '../../node_modules/react-toastify/dist/ReactToastify.css';
import { ActiveLogin } from '../App';

const UserLogin = () => {
    const { setActiveLogin } = useContext(ActiveLogin)
    const [Data, setData] = useState([])
    GetUsersData().then((result) => { setData(result) })
    let lo = -1
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
        let email = document.getElementById("email").value
        let password = document.getElementById("password").value
        for (let i = 0; i < Data.length; i++) {
            if (email === Data[i].email && password === Data[i].password) {
                lo = i
            }
        }
        if (lo === -1) {
            toast.warn("Either Email or Password Incorrect!!!!", {
                position: "top-center",
                autoClose: 1000,
                theme: "dark",
            });
            document.getElementById("email").focus()
        } else {
            setActiveLogin(1)
            // window.location.href = "UserPortal";
            let aa = document.getElementById("Loginpage");
            aa.setAttribute("class", "d-none")
            let bb = document.getElementById("Portalpage");
            bb.setAttribute("class", "d-block")
            document.getElementById("span").innerHTML = Data[lo].fname
        }
    }

    return (
        <>
            <div class="d-block" id="Loginpage">
                <div class="bg-success pb-5">
                    <div class="container" style={{ width: "40%" }}>
                        <h1 class="text-center text-white">Users Login</h1>
                        <form id="form">
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label text-white">Email address</label>
                                <input type="email" class="form-control" id="email" aria-describedby="emailHelp" />
                            </div>
                            <div class="mb-3 ">
                                <label for="exampleInputPassword1" class="form-label text-white">Password</label>
                                <div class="eyesetting">
                                    <input type="password" class="form-control" name="password" id="password" />
                                    <i class="fa-solid fa-eye" id="show-password" onClick={HideShow}></i>
                                </div>
                            </div>
                            <button type="button" class="btn btn-primary" onClick={Login}>Submit</button>
                        </form>
                    </div>
                </div>
            </div>


            <div class="d-none" id="Portalpage">
                <div class="bg-success">
                    <div class="container text-center text-white">
                        <h1>Wellcome to Book Bazzar</h1>
                        <h1>Hello <span id="span" class="text-danger"></span> ... </h1>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </>
    )
}

export default UserLogin;