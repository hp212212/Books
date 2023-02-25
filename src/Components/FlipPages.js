import React, { useContext } from "react";
import "../Css/Style.css";
import HTMLFlipBook from "react-pageflip";
import ReactQuill from "react-quill";
import { CurrentTitleList } from "../Context";

const FlipPages = () => {
  const { currentTitleList, seebookindex } = useContext(CurrentTitleList);
  // const dadadada = () => {
  //   document.getElementById("Page 1").setAttribute("className", "demoPage stf__item --right --hard --simple")
  //   document.getElementById("Page 1").setAttribute("style", "display: block;")
  // }
  return (
    <>
      {/* <button onClick={dadadada}>cccc</button> */}
      <div class="d-flex pb-1 justify-content-center bg-success">
        <HTMLFlipBook
          width={500}
          height={500}
          size="fixed"
          showCover={true}
          mobileScrollSupport={true}
          flippingTime={1500}
          drawShadow={true}
          maxShadowOpacity={0.5}
        >

          {currentTitleList[seebookindex].pages.map((res, index) => {
            return (
              <div className="demoPage" number={index + 1} id={`Page ${index + 1}`}>
                <ReactQuill
                  theme="bubble"
                  readOnly={true}
                  className="bg-white text-black border border-2 border-dark rounded-1 w-100 h-100"
                  value={res}
                />
              </div>
            );
          })}


          {/* <div className="demoPage">
            <ReactQuill
              theme="bubble"
              readOnly={true}
              className="bg-white text-black rounded-start-3 w-100 h-100"
              value="Hitesh"
            />
          </div> */}
        </HTMLFlipBook>
      </div>
    </>
  );
};

export default FlipPages;
