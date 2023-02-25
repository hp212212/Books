import React, { useEffect, useState } from 'react';
import { GetAdminPerson, GetBookTitle, GetBookTopics } from '../Server/GET';
import '../Css/Style.css'
import { PostNewBookTitle, PostNewBookTopic } from '../Server/POST';
import { PostNewBookTitleWithPages } from '../Server/PUT';
import { ToastContainer, toast } from 'react-toastify';
import '../../node_modules/react-toastify/dist/ReactToastify.css';
import ReactQuill from 'react-quill';
import "../../node_modules/react-quill/dist/quill.snow.css"
import Paginations from './Paginations';

const AdminPortal = () => {
    // React Quill
    const modules = {
        toolbar: [
            [{ header: [1, 2, 3, 4, 5, 6, false] }], ["bold", "italic", "underline", "strike", "blockquote", "code-block"], [{ 'script': 'sub' }, { 'script': 'super' }], [{ 'indent': '-1' }, { 'indent': '+1' }], [{ 'direction': 'rtl' }], [{ font: [] }], [{ align: ["right", "center", "justify"] }], [{ list: "ordered" }, { list: "bullet" }], ["link", "image", "video", "formula"], [{ color: [] }], [{ background: [] }], ["clean"], ["undo"]
        ]
    };

    const formats = ["header", "bold", "italic", "underline", "strike", "blockquote", "code-block", "list", "bullet", "link", "color", "image", "background", "align", "size", "font", "clean", "script", "indent", "direction", "undo", "Arial", "video", "formula"
    ];
    let [code, setCode] = useState("...");
    const handleProcedureContentChange = (content, delta, source, editor) => {
        setCode(content);
    };
    // useEffect(() => {
    //     document.getElementById("Typing").innerHTML = code
    // }, [code])



    let AdminPerson = GetAdminPerson()
    let [SelectedTopicname, setSelectedTopicname] = useState("")
    let [NewBookTopicData, setNewBookTopicData] = useState({})
    let [BookTopicsList, setBookTopicsList] = useState([])
    let [NewBookTitleData, setNewBookTitleData] = useState({})
    let [BookTitlesList, setBookTitlesList] = useState([])
    let xx = '' // Selected Book Topic Name , Id
    let yy = '' // Selected Book Title Name , Id
    const EditChange = () => {
        document.getElementById("Texar").setAttribute("class", "col-12 d-none Texar")
        document.getElementById("Reader").setAttribute("class", "col-12 d-flex Reader")
        document.getElementById("SaveNewPage").setAttribute("class", "col-2 btn btn-primary d-none")
        document.getElementById("NewPageTexar").setAttribute("class", "col-2 btn btn-primary")
    }
    const SelectedTopicHideShow = (xxx) => {
        EditChange()
        let cc = document.getElementById("NewBookTitleform");
        cc.setAttribute("class", "row g-3 text-white my-5 d-none TitleForm")
        let PQR = document.getElementById("inputTitle")
        PQR.selectedIndex = 0;
        xx = xxx.target.value
        if (xx === "selected") {
            let aa = document.getElementById("NewBookTopicform");
            aa.setAttribute("class", "row g-3 text-white py-3 d-none")
            let bb = document.getElementById("TitleSelectForm");
            bb.setAttribute("class", "col-6 col-6 me-auto d-none")
            document.getElementById("Pagesform").setAttribute("class", "row g-3 text-white my-5 d-none TitleForm")

        } else if (xx === "") {
            let aa = document.getElementById("NewBookTopicform");
            aa.setAttribute("class", "row g-3 text-white py-3")
            let bb = document.getElementById("TitleSelectForm");
            bb.setAttribute("class", "col-md-6 me-auto d-none")
            document.getElementById('NewBookTopic').focus()
            document.getElementById("Pagesform").setAttribute("class", "row g-3 text-white my-5 d-none TitleForm")
        }
        else {
            setSelectedTopicname(xx)
            setNewBookTitleData({ ...NewBookTitleData, "topic": xx })
            let aa = document.getElementById("NewBookTopicform");
            aa.setAttribute("class", "row g-3 text-white py-3 d-none")
            let bb = document.getElementById("TitleSelectForm");
            bb.setAttribute("class", "col-md-6 me-auto")
            document.getElementById("Pagesform").setAttribute("class", "row g-3 text-white my-5 d-none TitleForm")
        }
    }
    const SelectedTitleHideShow = (yyy) => {
        EditChange()
        yy = yyy.target.value
        if (yy === "selected") {
            document.getElementById("NewBookTitleform").setAttribute("class", "row g-3 text-white my-5 d-none TitleForm")
            document.getElementById("Next").setAttribute("class", "btn btn-primary pe-5 position-relative d-none")
            document.getElementById("Pagesform").setAttribute("class", "row g-3 text-white my-5 d-none TitleForm")
        } else if (yy === "") {
            setNewBookTitleData({ "topic": SelectedTopicname })
            document.getElementById("NewBookTitleform").setAttribute("class", "row g-3 text-white my-5 TitleForm")
            document.getElementById("FinalSubmit").setAttribute("class", "col-12 w-auto mx-auto")
            document.getElementById("Edit").setAttribute("class", "col-12 w-auto mx-auto d-none")
            document.getElementById("Next").setAttribute("class", "btn btn-primary pe-5 position-relative d-none")
            document.getElementById("Pagesform").setAttribute("class", "row g-3 text-white my-5 d-none TitleForm")
        }
        else {
            for (let i = 0; i < BookTitlesList.length; i++) {
                if (yy === BookTitlesList[i].title) {
                    setNewBookTitleData(BookTitlesList[i])
                    // setNewBookTitleData(...NewBookTitleData, BookTitlesList[i])
                    break
                }
            }
            document.getElementById("NewBookTitleform").setAttribute("class", "row g-3 text-white my-5 TitleForm")
            document.getElementById("FinalSubmit").setAttribute("class", "col-12 w-auto mx-auto d-none")
            document.getElementById("Edit").setAttribute("class", "col-12 w-auto mx-auto")
            document.getElementById("Next").setAttribute("class", "btn btn-primary pe-5 position-relative")
            document.getElementById("Pagesform").setAttribute("class", "row g-3 text-white my-5 d-none TitleForm")
        }
    }
    const AddNewTopic = () => {
        let loo = -1
        for (let i = 0; i < BookTopicsList.length; i++) {
            if (loo === BookTopicsList[i].topic) {
                loo = i
            }
        }
        if (loo !== -1) {
            toast.warn("This Book Topic exist in list. Please, Add another Topic.!", {
                position: "top-center",
                autoClose: 2000,
                theme: "dark",
            });
            document.getElementById('NewBookTopic').focus()
        } else if (!NewBookTopicData.topic) {
            document.getElementById('NewBookTopic').focus()
            toast.warn("Please,Fill the Topic Name !!!!!", {
                position: "top-center",
                autoClose: 2000,
                theme: "dark",
            });
        } else {
            toast.success("Topic Added Successfully", {
                position: "top-center",
                autoClose: 2000,
            });
            PostNewBookTopic(NewBookTopicData)
            setNewBookTopicData({})
            document.getElementById("inputTopic").selectedIndex = 0
            document.getElementById('NewBookTopicform').reset()
            let aa = document.getElementById("NewBookTopicform");
            aa.setAttribute("class", "row g-3 text-white py-3 d-none")
        }
    }
    const AddNewTitleData = () => {
        PostNewBookTitle(NewBookTitleData)
        setNewBookTitleData({})
        toast.success("New Title of " + SelectedTopicname + " is Added Successfully.....", {
            position: "top-center",
            autoClose: 2000,
            theme: "dark",
        });
        document.getElementById("NewBookTitleform").reset()
        document.getElementById("NewBookTitleform").setAttribute("class", "row g-3 text-white my-5 d-none TitleForm")
    }
    const EditTitleData = (xyz) => {

    }
    const Pagesform = () => {
        document.getElementById("NewBookTitleform").setAttribute("class", "row g-3 text-white my-5 d-none TitleForm")
        document.getElementById("Pagesform").setAttribute("class", "row g-3 text-white my-5 TitleForm")
        EditChange()
        setCode(NewBookTitleData["pages[]"][0])
        console.log(code)
    }
    const BackToBookDetail = () => {
        document.getElementById("NewBookTitleform").setAttribute("class", "row g-3 text-white my-5 TitleForm")
        document.getElementById("Pagesform").setAttribute("class", "row g-3 text-white my-5 d-none TitleForm")
        EditChange()
    }
    const NewPageTexar = () => {
        document.getElementById("Texar").setAttribute("class", "col-12 d-flex Texar")
        document.getElementById("Reader").setAttribute("class", "col-12 d-none Reader")
        document.getElementById("SaveNewPage").setAttribute("class", "col-2 btn btn-primary")
        document.getElementById("NewPageTexar").setAttribute("class", "col-2 btn btn-primary d-none")
        setCode("...")
    }
    const SaveNewPage = () => {
        EditChange()
        // alert(Object.keys(NewBookTitleData.pages).length)        
        if (!(NewBookTitleData.pages)) {
            let pages = []
            pages.push(code)
            NewBookTitleData = { ...NewBookTitleData, "pages": pages }
            //     NewBookTitleData.pages = {}
            //     NewBookTitleData.pages["page1"] = code
        } else {
            // pages["page1"] = code
            NewBookTitleData.pages.push(code)
        }
        setNewBookTitleData({ ...NewBookTitleData })
        PostNewBookTitleWithPages(NewBookTitleData, NewBookTitleData.id)
        setCode("...")
    }
    useEffect(() => {
        let BookTopics = GetBookTopics()
        let BookTitles = GetBookTitle()
        setBookTopicsList(BookTopics)
        let dada = []
        let lo = -1
        for (let i = 0; i < BookTitles.length; i++) {
            if (SelectedTopicname === BookTitles[i].topic) {
                lo = i
                dada.push(BookTitles[i])
            }
        }
        if (lo === -1) {
            setBookTitlesList([])
        } else {
            setBookTitlesList(dada)
        }
        console.log("Hello")
    }, [NewBookTopicData, SelectedTopicname, NewBookTitleData, code])
    const aaaaaa=()=>{

    }

    return (
        <>
            <div class="bg-success  pb-5 min-vh-100">
                <div class="container text-center text-white">
                    <h1>Admin Portal</h1>
                    <h1>Hello <span id="span" class="text-danger">{AdminPerson[0].uname}</span> ... </h1>
                </div>
                <div class="container w-75">
                    <form class="row g-3 text-white">

                        {/* Topic Block */}
                        <div class="col-md-6 me-auto">
                            <label for="inputState" class="form-label">Courses</label>
                            <div class="position-relative d-flex">
                                <i class="fa-solid fa-arrow-right-from-bracket leftarrow"></i>
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
                        <div class="col-md-6 me-auto d-none" id="TitleSelectForm">
                            <label for="inputState" class="form-label">Books</label>
                            <select id="inputTitle" placeholder="select courses" class="form-select text-capitalize kaka" onChange={(event) => SelectedTitleHideShow(event)} >
                                <option selected value="selected" >All books written on
                                    {/* <span id="saaas" class="text-success">{SelectedTopicname}</span> */}
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
                    <form class="row g-3 text-white py-3 d-none" id="NewBookTopicform">
                        <div class="mb-3 ">
                            <label for="exampleInputPassword1" class="form-label text-white">Add New Topic Name</label>
                            <div class="eyesetting">
                                <input type="text" class="form-control" name="NewBookTopic" id="NewBookTopic" placeholder='New Topic Name' onChange={(event) => { setNewBookTopicData({ "topic": event.target.value }) }} />
                                <i class="fa-solid fa-plus" onClick={AddNewTopic}></i>
                            </div>
                        </div>
                    </form>

                    {/* New Title Added Block */}
                    <form class="row g-3 text-white my-5 d-none TitleForm" id="NewBookTitleform">
                        <div class="col-md-12 bg-white text-center text-success fs-2 fw-bolder m-0 pb-1">
                            Topic Detail
                        </div>
                        <div class="col-md-6">
                            <label class="form-label">Topic</label>
                            <input type="text" class="form-control text-capitalize" value={SelectedTopicname} id="SelectedTopicname" disabled />
                        </div>
                        <div class="col-md-6">
                            <label class="form-label">Book Title</label>
                            <input type="text" class="form-control" id="BookTitle" value={NewBookTitleData.title || ""} onChange={(event) => { setNewBookTitleData({ ...NewBookTitleData, "title": event.target.value }) }} />
                        </div>
                        <div class="col-md-6">
                            <label class="form-label">Author</label>
                            <input type="text" class="form-control text-capitalize" id="Author" value={NewBookTitleData.author || ""} onChange={(event) => { setNewBookTitleData({ ...NewBookTitleData, "author": event.target.value }) }} />
                        </div>
                        <div class="col-md-6">
                            <label class="form-label">Country of Origin</label>
                            <input type="text" class="form-control" id="countryoforigin" value={NewBookTitleData.country || ""} onChange={(event) => { setNewBookTitleData({ ...NewBookTitleData, "country": event.target.value }) }} />
                        </div>
                        <div class="d-flex justify-content-end">
                            <div id="FinalSubmit" class="col-12 w-auto  d-none">
                                <button type="button" class="btn btn-primary" onClick={AddNewTitleData}>Final Submit</button>
                            </div>
                            <div id="Edit" class="col-12 w-auto  d-none">
                                <button type="button" class="btn btn-primary" onClick={() => { EditTitleData(NewBookTitleData.customId) }}>Edit</button>
                            </div>
                            <div class="col-12 w-auto ">
                                <button id="Next" type="button" class="btn btn-primary pe-5 position-relative d-none" onClick={Pagesform}>Pages
                                    <i class="fa-solid fa-arrow-right-from-bracket Pages"></i>
                                </button>

                            </div>
                        </div>
                    </form>

                    {/* Pages Section */}
                    <form class="row g-3 text-white my-5 d-none TitleForm" id="Pagesform">
                        <div class="col-md-12 bg-white text-center text-success fs-2 fw-bold m-0 pb-1">
                            Book Pages
                        </div>
                        <div id="Texar" class="col-12 d-none Texar">
                            <ReactQuill
                                className="bg-white text-black rounded-3"
                                theme="snow"
                                modules={modules}
                                formats={formats}
                                value={code || ""}
                                onChange={handleProcedureContentChange}
                            />
                            {/* <div id="Typing" class="w-100 rounded-2 h-50 mt-2 mb-5 bg-white d-flex text-black"></div> */}
                            {/* <input id="Typing" value={code||""} className="w-100 rounded-2 h-50 mt-2 mb-5 bg-white d-flex text-black"/> */}

                        </div>
                        <div id="Reader" readonly class="col-12 d-flex Reader">
                            <ReactQuill
                                theme="bubble"
                                readOnly={true}
                                className="bg-white text-black rounded-3 w-100"
                                value={code}
                            />
                            {/* <div className="bg-white text-black rounded-3 w-100" id="textarea" ></div> */}
                        </div>
                        <div class="col-12 mt-5 d-flex justify-content-between">
                            <button id="Next" type="button" class="col-2 btn btn-primary ps-5 position-relative" onClick={BackToBookDetail}>Book Detail<i class="fa-solid fa-backward Backtobookdetail"></i>
                            </button>
                            {/* <nav aria-label="Page navigation example" class="col-8 my-0">
                                <ul class="pagination Book-page-scroll mx-auto">
                                    <li class="page-item disabled"><a class="page-link" href="/a">Pre..</a></li>
                                    <li class="page-item"><a class="page-link" href="/a">1</a></li>
                                    <li class="page-item"><a class="page-link" href="/a">2</a></li>
                                    <li class="page-item">
                                        <a class="page-link" href="/a">Next</a>
                                    </li>
                                </ul>
                            </nav> */}
                            <div class="col-8 my-0 d-flex justify-content-center">
                                <Paginations 
                                // Pages={res}
                                />
                            </div>
                            <button id="NewPageTexar" type="button" class="col-2 btn btn-primary" onClick={NewPageTexar}>New Page</button>
                            <button id="SaveNewPage" type="button" class="col-2 btn btn-primary d-none" onClick={SaveNewPage}>Save</button>
                        </div>

                        {/* <div class="page-scroll"></div> */}

                    </form>
                </div>
            </div >
            <button class="btn btn-primary" onClick={aaaaaa}/>
            <ToastContainer />
        </>
    )
}

export default AdminPortal;