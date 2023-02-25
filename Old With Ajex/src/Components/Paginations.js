import React, { useState } from "react";
import "../Css/Style.css";


function Paginations() {
  let pages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]

  const [currentPage, setcurrentPage] = useState(1);

  const [maxPageNumberLimit, setmaxPageNumberLimit] = useState(4);
  const [minPageNumberLimit, setminPageNumberLimit] = useState(0);

  const handleClick = (event) => {
    setcurrentPage(Number(event.target.id));
    setmaxPageNumberLimit(Number(event.target.id) + 1);
    setminPageNumberLimit(Number(event.target.id) - 3);
  };


  const DisplayPageNumbers = pages.map((number) => {
    if (number < maxPageNumberLimit + 2 && number > minPageNumberLimit) {
      return (
        <li
          key={number}
          id={number}
          onClick={handleClick}
          className={currentPage === number ? "active" : null}
        >
          {number}
        </li>
      );
    } else {
      return null;
    }
  });

  const handleNextbtn = () => {
    setcurrentPage(currentPage + 1);
    if (currentPage + 2 > maxPageNumberLimit) {
      setmaxPageNumberLimit(maxPageNumberLimit + 1);
      setminPageNumberLimit(minPageNumberLimit + 1);
    }
  };

  const handlePrevbtn = () => {
    setcurrentPage(currentPage - 1);
    if (currentPage - 2 < maxPageNumberLimit) {
      setmaxPageNumberLimit(maxPageNumberLimit - 1);
      setminPageNumberLimit(minPageNumberLimit - 1);
    }
  };
  const FirstFirst = () => {
    setcurrentPage(1)
    setmaxPageNumberLimit(2);
    setminPageNumberLimit(-2);
  }

  const LastLast = () => {
    setcurrentPage(pages.length)
    setmaxPageNumberLimit(pages.length + 1);
    setminPageNumberLimit(pages.length - 3);
  }

  return (
    <>
      <ul class="Pagination">
        <li>
          <button
            onClick={FirstFirst}
          >
            First
          </button>
        </li>
        <li>
          <button
            onClick={handlePrevbtn}
            disabled={currentPage === pages[0] ? true : false}
          >
            Prev
          </button>
        </li>
        {DisplayPageNumbers}

        <li>
          <button
            onClick={handleNextbtn}
            disabled={currentPage === pages[pages.length - 1] ? true : false}
          >
            Next
          </button>
        </li>
        <li>
          <button
            onClick={LastLast}
          >
            Last
          </button>
        </li>
      </ul>
    </>
  );
}

export default Paginations;
