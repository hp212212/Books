import React, { useContext, useState } from "react";
import ReactQuill from "react-quill";
import "../Css/Style.css";
import { PutNewBookTitleWithPages } from "../Server/PUTAxios";
import { ToastContainer, toast } from 'react-toastify';
import '../../node_modules/react-toastify/dist/ReactToastify.css';
import { useEffect } from "react";
import Swal from "sweetalert2";
import { ActiveAdmin } from "../Context";


const Paginations = (Props) => {
  let xxyyzz = "<h3 class=\"ql-align-center\"><br></h3><h1 class=\"ql-align-center\"><strong style=\"color: rgb(230, 0, 0);\">NO</strong></h1><h1 class=\"ql-align-center\"><br></h1><h1 class=\"ql-align-center\"><strong style=\"color: rgb(0, 97, 0);\">PAGES</strong></h1><h1 class=\"ql-align-center\"><br></h1><h1 class=\"ql-align-center\"><strong style=\"color: rgb(0, 71, 178);\">FOUND</strong></h1><p><br></p>"

  const { UpdateAll } = useContext(ActiveAdmin)
  const { setUpdateAll } = useContext(ActiveAdmin)
  let NewBookTitleData = Props.NewBookTitleData
  let [currentPage, setcurrentPage] = useState(1);
  let [maxPageNumberLimit, setmaxPageNumberLimit] = useState(2);
  let [minPageNumberLimit, setminPageNumberLimit] = useState(-2);
  let [Texar, setTexar] = useState("d-none")
  let [Reader, setReader] = useState("d-flex")
  let [editSaveEdited, setEditSaveEdited] = useState("Edit")
  let [saveNewPage, setSaveNewPage] = useState("Add New")
  // if (NewBookTitleData.pages.length > 0) {
  //   xxyyzz = NewBookTitleData.pages[0]
  // }
  // console.log(xxyyzz)
  let [code, setCode] = useState(NewBookTitleData.pages[0]); // React Quill 

  // let [code, ] = useState(NewBookTitleData.pages[0]); // React Quill 

  const SaveNewPage = () => {
    if (document.getElementById("AddPage").textContent === "Save New") {
      if (!(code === "<p><br></p>") && !(code === "<p>Please Write Something</p>")) {
        NewBookTitleData.pages.push(code)
        PutNewBookTitleWithPages(NewBookTitleData, NewBookTitleData.id)
        setcurrentPage(NewBookTitleData.pages.length)
        setCode(NewBookTitleData.pages[NewBookTitleData.pages.length - 1])
        document.getElementById("EditSaveEdited").setAttribute("class", "btn btn-primary me-1")
        setUpdateAll(UpdateAll + 1)
        toast.success("Page Saved Successfully!!!", {
          position: "top-center",
          autoClose: 1000,
        });
        setTexar("d-none")
        setReader("d-flex")
      } else {
        toast.warn("Page is NOT Saved. Please, Write Something!!!", {
          position: "top-center",
          autoClose: 1000,
        });
        setCode(NewBookTitleData.pages[0])
        document.getElementById("EditSaveEdited").setAttribute("class", "btn btn-primary me-1")
        setTexar("d-none")
        setReader("d-flex")
        setTexar(Texar === "d-none" ? "d-none" : "d-none")
        setReader(Reader === "d-flex" ? "d-flex" : "d-flex")
      }
      let rr = document.getElementById("AddPage").textContent === "Add Page" ? "Save New" : "Add Page";
      document.getElementById("AddPage").textContent = rr
      setSaveNewPage("Add New")
    } else {
      document.getElementById("EditSaveEdited").setAttribute("class", "btn btn-primary me-1 d-none")
      let rr = document.getElementById("AddPage").textContent === "Add Page" ? "Save New" : "Add Page";
      document.getElementById("AddPage").textContent = rr
      setEditSaveEdited("Edit")
      setSaveNewPage("Save New")
      setCode("Please Write Something")
      setTexar(Texar === "d-none" ? "d-flex" : "d-none")
      setReader(Reader === "d-flex" ? "d-none" : "d-flex")
      setTexar("d-flex")
      setReader("d-none")
    }
  }

  const EditSaveEdited = () => {
    if (document.getElementById("EditSaveEdited").textContent === "Save Edited") {
      if (!(code === "<p><br></p>") && !(code === "<p>Please Write Something</p>")) {
        NewBookTitleData.pages.splice(currentPage - 1, 1, code)
        PutNewBookTitleWithPages(NewBookTitleData, NewBookTitleData.id)
        setUpdateAll(UpdateAll + 1)
        toast.success("Page Edited Successfully!!!", {
          position: "top-center",
          autoClose: 1000,
        });
        setTexar("d-none")
        setReader("d-flex")
      } else {
        toast.warn("Page is NOT Edited. Please, Write Something!!!", {
          position: "top-center",
          autoClose: 1000,
        });
        setTexar("d-none")
        setReader("d-flex")
      }
      setEditSaveEdited("Edit")
    } else {
      setEditSaveEdited("Save Edited")
      setTexar("d-flex")
      setReader("d-none")
    }
  }

  const DeletePage = () => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
        setUpdateAll(UpdateAll + 1)
        NewBookTitleData.pages.splice(currentPage - 1, 1)
        PutNewBookTitleWithPages(NewBookTitleData, NewBookTitleData.id)
        setcurrentPage(currentPage - 1)
      }
    })
  }
  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }], ["bold", "italic", "underline", "strike", "blockquote", "code-block"], [{ 'script': 'sub' }, { 'script': 'super' }], [{ 'indent': '-1' }, { 'indent': '+1' }], [{ 'direction': 'rtl' }], [{ font: [] }], [{ align: ["right", "center", "justify"] }], [{ list: "ordered" }, { list: "bullet" }], ["link", "image", "video", "formula"], [{ color: [] }], [{ background: [] }], ["clean"], ["undo"]
    ]
  };

  const formats = ["header", "bold", "italic", "underline", "strike", "blockquote", "code-block", "list", "bullet", "link", "color", "image", "background", "align", "size", "font", "clean", "script", "indent", "direction", "undo", "Arial", "video", "formula"
  ];
  const handleProcedureContentChange = (content, delta, source, editor) => {
    setCode(content);
  };

  let pages = []
  for (let i = 1; i < ((NewBookTitleData.pages).length) + 1; i++) {
    pages.push(i)
  }

  const DisplayPageNumbers = pages.map((number) => {
    if (number < maxPageNumberLimit + 2 && number > minPageNumberLimit) {
      return (
        <li
          key={number}
          id={number}
          onClick={(event) => { setcurrentPage(Number(event.target.id)) }}
          className={currentPage === number ? "active" : null}
        >
          {number}
        </li>
      );
    } else {
      return null;
    }
  });


  const FindPage = () => {
    let GoToPage = Number(document.getElementById("FindPage").value)
    if (0 < GoToPage && GoToPage < (pages.length) + 1) {
      setcurrentPage(GoToPage);
      document.getElementById("FindPage").value = null
    } else {
      toast.warn("Selected Page Not Found.", {
        position: "top-center",
        autoClose: 1000,
      });
      document.getElementById("FindPage").value = null
      document.getElementById("FindPage").focus()
    }
  }
  useEffect(() => {
    setmaxPageNumberLimit(currentPage + 1)
    setminPageNumberLimit(currentPage - 3)
    setCode(NewBookTitleData.pages[currentPage - 1])
    console.log("Pagination")
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage])


  return (
    <>
      <form class="row g-3 text-white my-5 TitleForm" id="Pagesform">
        <div class="col-md-12 bg-white text-center text-success fs-2 fw-bold m-0 pb-1">
          Book Pages
        </div>
        <div id="Texar" className={`col-12 Texar ${Texar}`}>
          <ReactQuill
            className="bg-white text-black rounded-3"
            theme="snow"
            modules={modules}
            formats={formats}
            value={code || xxyyzz}
            onChange={handleProcedureContentChange}
          />

        </div>
        <div id="Reader" readonly className={`col-12 Reader ${Reader}`} >
          <ReactQuill
            theme="bubble"
            readOnly={true}
            className="bg-white text-black rounded-3 w-100"
            value={code||xxyyzz}
          />
        </div>
        <div class="col-12 mt-5 d-flex justify-content-between">
          <div class="col-3 d-flex">
            <input id="FindPage" type="number" class="w-25 bg-primary rounded-2 ps-2 text-white placeholder-white" placeholder="Go To" />
            <button class="btn btn-primary ms-1" type="button" onClick={FindPage}>Find</button>
            <button class="btn btn-primary ms-1" type="button" onClick={DeletePage}>Delete Page</button>
          </div>
          <div class="col-6 my-0 d-flex justify-content-center">
            <ul class="Pagination">
              <li>
                <button
                  type="button"
                  onClick={() => { setcurrentPage(1) }}
                >
                  First
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => { setcurrentPage(currentPage - 1) }}
                  disabled={currentPage === pages[0] ? true : false}
                >
                  Prev
                </button>
              </li>
              {DisplayPageNumbers}

              <li>
                <button
                  type="button"
                  onClick={() => { setcurrentPage(currentPage + 1) }}
                  disabled={currentPage === pages[pages.length - 1] ? true : false}
                >
                  Next
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => { setcurrentPage(pages.length) }}
                >
                  Last
                </button>
              </li>
            </ul>
          </div>
          <div class="col-3 d-flex justify-content-end">
            <button id="EditSaveEdited" type="button" class="btn btn-primary me-1" onClick={EditSaveEdited}>{editSaveEdited}</button>
            <button id="AddPage" type="button" class="btn btn-primary" onClick={SaveNewPage}>{saveNewPage}</button>
          </div>
        </div>
      </form>
      <ToastContainer />
    </>
  );
}

export default Paginations;
