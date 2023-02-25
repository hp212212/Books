import React from 'react';
import Book6 from '../Images/Book6.jpg'
import Book7 from '../Images/Book7.jpg'
import Book8 from '../Images/Book8.jpg'
import Book9 from '../Images/Book9.jpg'
import Book10 from '../Images/Book10.jpg'

const SubComponent2 = (Props) => {
    let res = Props.res
    return (
        <div class={res.class}>
            <img src={res.src} class="d-block w-100" alt="..." />
            <div class="carousel-caption d-none d-md-block">
                <h5>Author : Sachin Bhai</h5>
                <p>Some representative placeholder content for the first slide.</p>
            </div>
        </div>
    )
}

const Home = () => {
    let bb = [{ class: 'carousel-item active', src: Book6 }, { class: 'carousel-item', src: Book7 }, { class: 'carousel-item', src: Book8 }, { class: 'carousel-item', src: Book9 }, { class: 'carousel-item', src: Book10 }]
    return (
        <>
            <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    {/* {
                        aa.map((res) => {
                            return <SubComponent1 res={res} />
                        })
                    } */}
                    <button type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="1" class="" aria-current="false" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="2" class="" aria-current="false" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="3" class="" aria-current="false" aria-label="Slide 4"></button>
                    <button type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="4" class="" aria-current="false" aria-label="Slide 5"></button>
                </div>
                <div class="carousel-inner">
                    {
                        bb.map((res)=>{
                            return <SubComponent2 res={res}/>
                        })
                    }
                    {/* <div class="carousel-item active">
                        <img src={Book6} class="d-block w-100" alt="..." />
                        <div class="carousel-caption d-none d-md-block">
                            <h5>Author : Sachin Bhai</h5>
                            <p>Some representative placeholder content for the first slide.</p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src={Book7} class="d-block w-100" alt="..." />
                        <div class="carousel-caption d-none d-md-block">
                            <h5>Author : Sachin Bhai</h5>
                            <p>Some representative placeholder content for the first slide.</p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src={Book8} class="d-block w-100" alt="..." />
                        <div class="carousel-caption d-none d-md-block">
                            <h5>Author : Sachin Bhai</h5>
                            <p>Some representative placeholder content for the first slide.</p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src={Book9} class="d-block w-100" alt="..." />
                        <div class="carousel-caption d-none d-md-block">
                            <h5>Author : Sachin Bhai</h5>
                            <p>Some representative placeholder content for the first slide.</p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src={Book10} class="d-block w-100" alt="..." />
                        <div class="carousel-caption d-none d-md-block">
                            <h5>Author : Sachin Bhai</h5>
                            <p>Some representative placeholder content for the first slide.</p>
                        </div>
                    </div> */}
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </>
    )
}

export default Home;