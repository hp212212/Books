import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ActiveLogin } from "../App";
import { CurrentTitleList } from "../Context";
import "../Css/Style.css";
import Swal from "sweetalert2";


const Books = () => {
  const { activelogin } = useContext(ActiveLogin)
  const navigate = useNavigate()
  const { currentTitleList, setSeebookindex } = useContext(CurrentTitleList);
  const ShowBook = (index) => {
    if (activelogin === -1) {
      Swal.fire({
        title: 'Login First !!',
        showCancelButton: true,
        confirmButtonText: 'Login',
        returnFocus: true,
        focusConfirm: true
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/UserLogin")
        } else {
          document.getElementById("form").reset()
        }
      })
    } else {
      setSeebookindex(index)
      navigate("/Books/FlipPages")
    }
  };

  return (
    <>

      <div class="flipContainer col-12 bg-success">
        {currentTitleList.map((res, index) => {
          return (res.pages.length > 4 && (
            <div
              class="flip3D"
            >
              <div class="front text-capitalize text-center fs-6 fw-Normal p-0 " >
                <div class="">Title</div>
                <div class="fw-bold">{res.title}</div>
                <div class="">By</div>
                <div class="fw-bold ">{res.author}</div>
              </div>
              <div class="back text-capitalize text-center fs-6 fw-Normal p-0">
                <div class="">Origin</div>
                <div class="fw-bold">{res.country}</div>
                <div class="">Total Pages</div>
                <div class="fw-bold ">{res.pages.length}</div>
                <button type="button" class="btn btn-outline-info" onClick={() => ShowBook(index)}>Read</button>
              </div>
            </div>)
          );
        })}
      </div>
    </>
  );
};

export default Books;
