import React from 'react';

const Landing = () => {
    return (
        <div class="carousel w-full">
            <div id="slide1" class="carousel-item relative w-full">
                <img src="https://i.ibb.co/JHhjTrB/slider2.webp" class="w-full" />
                <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" class="btn btn-circle border-0 bg-primary">❮</a>
                    <a href="#slide1" class="btn btn-circle border-0 bg-primary">❯</a>
                </div>
            </div>
            <div id="slide2" class="carousel-item relative w-full">
                <img src="https://i.ibb.co/Hh4SgY7/slider1.webp" class="w-full" />
                <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" class="btn btn-circle border-0 bg-primary">❮</a>
                    <a href="#slide1" class="btn btn-circle border-0 bg-primary">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Landing;