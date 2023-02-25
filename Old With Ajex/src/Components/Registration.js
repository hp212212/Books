import React, { useState } from 'react';
import '../Css/Style.css'
import { PostUsersData } from '../Server/POSTAxios';
import Swal from "sweetalert2";


const Registration = () => {
    const HideShow = (enent) => {
        let tt = document.getElementById("password")
        let type = tt.getAttribute("type") === "password" ? "text" : "password";
        tt.setAttribute("type", type)
        let e = document.getElementById("show-password")
        let eye = e.getAttribute("class") === "fa-solid fa-eye" ? "fa-solid fa-eye-slash" : "fa-solid fa-eye";
        e.setAttribute("class", eye)
    }

    let [Data, setData] = useState({})

    const OnChange = (event) => {
        let nam = event.target.id
        let value = event.target.value
        setData((Data) => {
            return { ...Data, [nam]: value }
        })
    }
    const MaleFemale = (xyz) => {
        setData((Data) => {
            return { ...Data, gender: xyz }
        })
    }
    const AddData = () => {
        // let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (Data.fname.length < 3) {
            document.getElementById('fname').focus()
            alert("Full Name with atleast 3 Charactors.")
        }
        else if (!Data.email || !(re.test(Data.email))) {
            document.getElementById('email').focus()
            alert("Please,Fill the Proper Email Address")
        }
        else if (!(Data.contact.length === 10)) {
            document.getElementById('contact').focus()
            alert("Please,Fill the Contact number")
        }
        else if (!Data.password) {
            document.getElementById('password').focus()
            alert("Please,Fill the Password")
        }
        else {
            Swal.fire({
                title: 'Do you want to save the Detail ?',
                showCancelButton: true,
                confirmButtonText: 'Save',
                denyButtonText: `Don't Save`,
                returnFocus: true,
                focusConfirm: true
            }).then((result) => {
                if (result.isConfirmed) {
                    PostUsersData(Data);
                    Swal.fire('Saved!', 'Your file has been Saved', 'success')
                    setData({})
                    document.getElementById("form").reset()
                    alert("hhhh")
                } else {
                    Swal.fire('Cancled')
                    document.getElementById("form").reset()
                }
            })
        }
    }

    return (
        <><div class="bg-success pb-5">
            <div class="container" style={{ width: "40%" }}>
                <h1 class="text-center text-white">New Registration</h1>
                <form id="form">
                    <div class="mb-3">
                        <label class="form-label text-white">Ful Name</label>
                        <input type="text" class="form-control" id="fname" aria-describedby="emailHelp" onChange={OnChange} />
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label text-white">Email address</label>
                        <input type="email" class="form-control" id="email" aria-describedby="emailHelp" onChange={OnChange} />
                        <div id="emailHelp" class="form-text text-white">We'll never share your email with anyone else.</div>
                    </div>
                    <div class="mb-3 ">
                        <label for="exampleInputPassword1" class="form-label text-white">Contact Number</label>
                        <div class="eyesetting">
                            <input type="number" class="form-control" name="contact" id="contact" onChange={OnChange} />
                        </div>
                    </div>
                    <div class="mb-3 ">
                        <label for="exampleInputPassword1" class="form-label text-white">Password</label>
                        <div class="eyesetting">
                            <input type="password" class="form-control" name="password" id="password" onChange={OnChange} />
                            <i class="fa-solid fa-eye" id="show-password" onClick={HideShow}></i>
                        </div>
                    </div>
                    <div class="form-check form-check-inline mb-3" >
                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="Male" value="option1" onClick={() => { MaleFemale("Male") }} />
                        <label class="form-check-label text-white" for="inlineRadio1">Male</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="Female" value="option2" onClick={() => { MaleFemale("Female") }} />
                        <label class="form-check-label text-white" for="inlineRadio2">Female</label>
                    </div>
                    <div class="mb-3 form-check">
                        <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                        <label class="form-check-label text-white" for="exampleCheck1">I have checked.</label>
                    </div>
                    <button type="button" class="btn btn-primary" onClick={AddData}>Submit</button>
                </form>
            </div>
        </div>
        </>
    )
}

export default Registration;