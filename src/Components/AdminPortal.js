import React, { useEffect, useState, useContext } from 'react';
// import { GetAdminPerson, GetBookTitle, GetBookTopics } from '../Server/GETAxios';
import { GetBookTitle, GetBookTopics } from '../Server/GETAxios';
import '../Css/Style.css'
import { PostNewBookTitle, PostNewBookTopic } from '../Server/POSTAxios';
import { ToastContainer, toast } from 'react-toastify';
import '../../node_modules/react-toastify/dist/ReactToastify.css';
// import ReactQuill from 'react-quill';
import "../../node_modules/react-quill/dist/quill.snow.css"
import Paginations from './Paginations';
import { PutNewBookTitleWithPages } from '../Server/PUTAxios';
import { ActiveAdmin } from '../Context';
import { MdDelete } from 'react-icons/md'
import { VscArchive } from 'react-icons/vsc'
import { BsBoxArrowInRight } from 'react-icons/bs'

const AdminPortal = () => {
    const { activeadmin, UpdateAll, setUpdateAll } = useContext(ActiveAdmin)


    let [SelectedTopicname, setSelectedTopicname] = useState("") // Current Topics
    let [NewBookTopicData, setNewBookTopicData] = useState({}) // New book Topic Data
    let [BookTopicsList, setBookTopicsList] = useState([]) // List of Topics
    let [NewBookTitleData, setNewBookTitleData] = useState({}) // New book Title Data
    let [BookTitlesList, setBookTitlesList] = useState([]) // List of Titals of Related to Topic

    let [readOnly, setReadOnly] = useState(true)
    let [TitleSelectForm, setTitleSelectForm] = useState("d-none")
    let [NewBookTopicform, setNewBookTopicform] = useState("d-none")
    let [NewBookTitleform, setNewBookTitleform] = useState("d-none")
    let [Edit, setEdit] = useState(true)
    let xx = '' // Selected Book Topic Name , Id
    let yy = '' // Selected Book Title Name , Id
    const SelectedTopicHideShow = (xxx) => {
        setNewBookTitleform("d-none")
        let PQR = document.getElementById("inputTitle")
        PQR.selectedIndex = 0;
        xx = xxx.target.value
        if (xx === "selected") {
            setNewBookTitleform("d-none")
            setNewBookTopicform("d-none")
            setTitleSelectForm("d-none")
            setNewBookTitleData({})
        } else if (xx === "") {
            setNewBookTitleform("d-none")
            setNewBookTopicform("d-block")
            setTitleSelectForm("d-none")
            document.getElementById('NewBookTopic').focus()
            setNewBookTitleData({})
        }
        else {
            setNewBookTitleData({})
            setSelectedTopicname(xx)
            setNewBookTopicform("d-none")
            setTitleSelectForm("d-block")
        }
    }
    const SelectedTitleHideShow = (yyy) => {
        yy = yyy.target.value
        if (yy === "selected") {
            setNewBookTitleform("d-none")
        } else if (yy === "") {
            setEdit(false)
            // document.getElementById("Editbut").textContent = "Save"
            setReadOnly(false)
            setNewBookTitleData({ "topic": SelectedTopicname })
            setNewBookTitleform("d-flex")
        }
        else {
            setEdit(true)
            // document.getElementById("Editbut").textContent = "Edit"
            setReadOnly(true)
            for (let i = 0; i < BookTitlesList.length; i++) {
                if (yy === BookTitlesList[i].title) {
                    setNewBookTitleData(BookTitlesList[i])
                    break
                }
            }
            setNewBookTitleform("d-flex")
        }
    }
    const AddNewTopic = (event) => {
        let loo = -1
        for (let i = 0; i < BookTopicsList.length; i++) {
            if (NewBookTopicData.topic === BookTopicsList[i].topic) {
                loo = i
            }
        }
        if (loo !== -1) {
            toast.warn("This Book Topic exist in list. Please, Add another Topic.!", {
                position: "top-center",
                autoClose: 1000,
                theme: "dark",
            });
            document.getElementById('NewBookTopic').value = ""
            document.getElementById('NewBookTopic').focus()
        } else if (!NewBookTopicData.topic) {
            document.getElementById('NewBookTopic').focus()
            toast.warn("Please,Fill the Topic Name !!!!!", {
                position: "top-center",
                autoClose: 1000,
                theme: "dark",
            });
        } else {
            toast.success("Topic Added Successfully", {
                position: "top-center",
                autoClose: 1000,
                theme: "dark",
            });
            setUpdateAll(UpdateAll + 1)
            PostNewBookTopic(NewBookTopicData)
            setNewBookTopicData({})
            document.getElementById("inputTopic").selectedIndex = 0
            document.getElementById('NewBookTopicform').reset()
            setNewBookTopicform("d-none")
            document.getElementById('NewBookTopic').value = ""
        }
    }
    const SaveEditTitleData = (xyz) => {
        let BookTitle = document.getElementById("BookTitle").value
        let Author = document.getElementById("Author").value
        let countryoforigin = document.getElementById("countryoforigin").value
        if (BookTitle === "" || Author === "" || countryoforigin === "") {
        } else if (!xyz) {
            NewBookTitleData["pages"] = []
            PostNewBookTitle(NewBookTitleData)
            setNewBookTitleData({})
            setNewBookTitleform("d-none")
            setUpdateAll(UpdateAll + 1)
            toast.success("Data Added Successfully", {
                position: "top-center",
                autoClose: 1000,
                theme: "dark",
            });
            let PQR = document.getElementById("inputTitle")
            PQR.selectedIndex = 0;
        } else {
            setReadOnly(false)
            if (document.getElementById("Editbut").textContent === "Save") {
                PutNewBookTitleWithPages(NewBookTitleData, xyz)
                setUpdateAll(UpdateAll + 1)
                toast.success("Edied Successfully", {
                    position: "top-center",
                    autoClose: 1000,
                    theme: "dark",
                });
                setReadOnly(true)
            }
            let rr = document.getElementById("Editbut").textContent === "Edit" ? "Save" : "Edit";
            document.getElementById("Editbut").textContent = rr
        }
    }

    useEffect(() => {
        GetBookTopics().then((result) => { setBookTopicsList(result) })
        let dada = []
        let lo = -1
        GetBookTitle().then((result) => {
            for (let i = 0; i < result.length; i++) {
                if (SelectedTopicname === result[i].topic) {
                    lo = i
                    dada.push(result[i])
                }
            }
            if (lo === -1) {
                setBookTitlesList([])
            } else {
                setBookTitlesList(dada)
            }
        })
        console.log("Adminportal")
    }, [NewBookTopicData, SelectedTopicname, NewBookTitleData])


    return (
        <>
            <div class="bg-success  pb-5 min-vh-100">
                <div class="container text-center text-white">
                    <h1>Admin Portal</h1>
                    <h1>Hello <span id="span" class="text-danger">
                        {activeadmin.uname}
                    </span> ... </h1>
                </div>
                <div class="container w-75">
                    <form class="row g-3 text-white">

                        {/* Topic Block */}
                        <div class="col-md-6 me-auto">
                            <label for="inputState" class="form-label">Courses</label>
                            <div class="position-relative d-flex">
                                {/* <i class="fa-solid fa-arrow-right-from-bracket leftarrow"></i> */}
                                <BsBoxArrowInRight class="leftarrow" />
                                <select id="inputTopic" placeholder="select courses" class="form-select text-capitalize" onChange={(event) => SelectedTopicHideShow(event)}>
                                    <option selected value="selected">select courses</option>
                                    <option class="bg-success" value="">Add New</option>
                                    {
                                        BookTopicsList.map((res) => {
                                            return <option value={res.customId}>{res.topic}</option>
                                        })
                                    }

                                </select>
                            </div>
                        </div>


                        {/* Title Block */}
                        <div className={`col-md-6 me-auto ${TitleSelectForm}`} id="TitleSelectForm">
                            <label for="inputState" class="form-label">Books</label>
                            <MdDelete /><VscArchive />
                            <select id="inputTitle" placeholder="select courses" class="form-select text-capitalize kaka" onChange={(event) => SelectedTitleHideShow(event)} >
                                <option selected value="selected" >All books written on{" "}<span id="saaas" class="text-success">{SelectedTopicname}</span>
                                </option>
                                <option class="bg-success" value="">Add New Title</option>
                                {
                                    BookTitlesList.map((res) => {
                                        return <option value={res.title}>{res.title}</option>
                                    })
                                }
                            </select>
                        </div>
                    </form>

                    {/* New Book Topic Block */}
                    <form className={`row g-3 text-white py-3 ${NewBookTopicform}`} id="NewBookTopicform">
                        <div class="mb-3 ">
                            <label for="exampleInputPassword1" class="form-label text-white">Add New Topic Name</label>
                            <div class="eyesetting">
                                <input type="text" class="form-control" name="NewBookTopic" id="NewBookTopic" placeholder='New Topic Name' onChange={(event) => { setNewBookTopicData({ "topic": event.target.value }) }} />
                                <i class="fa-solid fa-plus" onClick={AddNewTopic}></i>
                            </div>
                        </div>
                    </form>

                    {/* New Title Added Block */}
                    <form className={`row g-3 text-white my-5 TitleForm ${NewBookTitleform}`} id="NewBookTitleform">
                        <div class="col-md-12 bg-white text-center text-success fs-2 fw-bolder m-0 pb-1">
                            Topic Detail
                        </div>
                        <div class="col-md-6">
                            <label class="form-label">Topic</label>
                            <input type="text" class="form-control text-capitalize" value={SelectedTopicname} id="SelectedTopicname" disabled />
                        </div>
                        <div class="col-md-6">
                            <label class="form-label">Book Title</label>
                            <input readOnly={readOnly} type="text" class="form-control" id="BookTitle" value={NewBookTitleData.title || ""} onChange={(event) => { setNewBookTitleData({ ...NewBookTitleData, "title": event.target.value }) }} />
                        </div>
                        <div class="col-md-6">
                            <label class="form-label">Author</label>
                            <input readOnly={readOnly} type="text" class="form-control text-capitalize" id="Author" value={NewBookTitleData.author || ""} onChange={(event) => { setNewBookTitleData({ ...NewBookTitleData, "author": event.target.value }) }} />
                        </div>
                        <div class="col-md-6">
                            <label class="form-label">Country of Origin</label>
                            <input readOnly={readOnly} type="text" class="form-control" id="countryoforigin" value={NewBookTitleData.country || ""} onChange={(event) => { setNewBookTitleData({ ...NewBookTitleData, "country": event.target.value }) }} />
                        </div>
                        <div class="d-flex justify-content-center">
                            <div id="Edit" class="col-12 w-auto">
                                <button id="Editbut" type="button" class="btn btn-primary" onClick={() => { SaveEditTitleData(NewBookTitleData.id) }} >{Edit ? "Edit" : "Save"}</button>
                            </div>
                        </div>
                    </form>
                    {
                        (NewBookTitleData.id > 0) &&
                        <Paginations
                            NewBookTitleData={NewBookTitleData}
                        />
                    }
                </div>
            </div >
            <ToastContainer />
        </>
    )
}

export default AdminPortal;