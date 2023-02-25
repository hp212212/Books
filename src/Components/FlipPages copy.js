import React from 'react';
import '../Css/Style.css'
import HTMLFlipBook from "react-pageflip";
import Book6 from '../Images/Book6.jpg'
import Book7 from '../Images/Book7.jpg'
import Book8 from '../Images/Book8.jpg'
import Book9 from '../Images/Book9.jpg'
import Book10 from '../Images/Book10.jpg'

const FlipPages = () => {
    return (
        <>
            <div class="d-flex p-2 py-3 justify-content-center bg-success">
                <HTMLFlipBook
                    width={300}
                    height={500}
                    size="fixed"
                    showCover={true}
                    mobileScrollSupport={true}
                    flippingTime={1500}
                    drawShadow={true}
                    maxShadowOpacity={0.7}
                >
                    <img src={Book6} alt="" />
                    <div className="demoPage"><img src={Book7} alt="" /></div>
                    <div className="demoPage"><img src={Book8} alt="" /></div>
                    <div className="demoPage"><img src={Book9} alt="" /></div>
                    <div className="demoPage"><img src={Book10} alt="" /></div>
                    <div className="demoPage"><img src={Book7} alt="" /></div>
                    <div className="demoPage"><img src={Book8} alt="" /></div>
                    <div className="demoPage"><img src={Book9} alt="" /></div>
                    <div className="demoPage"><img src={Book10} alt="" /></div>
                    <div className="demoPage"><img src={Book7} alt="" /></div>
                    <div className="demoPage"><img src={Book8} alt="" /></div>
                    <div className="demoPage"><img src={Book9} alt="" /></div>
                    <div className="demoPage"><img src={Book10} alt="" /></div>
                </HTMLFlipBook>
            </div>
        </>
    )
}

export default FlipPages;