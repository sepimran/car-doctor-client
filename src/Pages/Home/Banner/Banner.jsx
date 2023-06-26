import React from 'react';
import bannerImg1 from '../../../assets/images/banner/1.jpg';
import bannerImg2 from '../../../assets/images/banner/2.jpg';
import bannerImg3 from '../../../assets/images/banner/3.jpg';
import bannerImg4 from '../../../assets/images/banner/4.jpg';
import bannerImg5 from '../../../assets/images/banner/5.jpg';
import bannerImg6 from '../../../assets/images/banner/6.jpg';

const Banner = () => {
    return (
        <div className='hero-area'>
            <div className="container">
                <div className="carousel w-full">
                    <div id="slide1" className="carousel-item relative w-full h-[600px] overlay">
                        <img src={bannerImg1} className="w-full object-cover object-top rounded-xl" />

                        <div className="absolute flex justify-start transform -translate-y-1/2 left-5 right-5 top-1/2 z-10 px-[60px]">
                            <div className='text-white max-w-[550px] text-[18px] space-y-7'>
                                <h1 className='font-bold text-[72px]'>Affordable Price For Car Servicing</h1>
                                <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>

                                <div>
                                    <button className="btn btn-primary mr-[10px] bg-[#FF3811] border-[#FF3811] text-white ">Discover More</button>
                                    <button className="btn btn-outline border-[#fff] text-white ">Latest Project</button>
                                </div>
                            </div>
                        </div>

                        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 z-10">
                            <a href="#slide4" className="btn btn-circle mr-5">❮</a> 
                            <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                    </div> 

                    <div id="slide2" className="carousel-item relative w-full h-[600px] overlay">
                        <img src={bannerImg2} className="w-full object-cover object-top rounded-xl" />

                        <div className="absolute flex justify-start transform -translate-y-1/2 left-5 right-5 top-1/2 z-10 px-[60px]">
                            <div className='text-white max-w-[550px] text-[18px] space-y-7'>
                                <h1 className='font-bold text-[72px]'>Affordable Price For Car Servicing</h1>
                                <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>

                                <div>
                                    <button className="btn btn-primary mr-[10px] bg-[#FF3811] border-[#FF3811] text-white ">Discover More</button>
                                    <button className="btn btn-outline border-[#fff] text-white ">Latest Project</button>
                                </div>
                            </div>
                        </div>

                        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 z-10">
                            <a href="#slide1" className="btn btn-circle mr-5">❮</a> 
                            <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                    </div> 

                    <div id="slide3" className="carousel-item relative w-full h-[600px] overlay">
                        <img src={bannerImg3} className="w-full object-cover object-top rounded-xl" />

                        <div className="absolute flex justify-start transform -translate-y-1/2 left-5 right-5 top-1/2 z-10 px-[60px]">
                            <div className='text-white max-w-[550px] text-[18px] space-y-7'>
                                <h1 className='font-bold text-[72px]'>Affordable Price For Car Servicing</h1>
                                <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>

                                <div>
                                    <button className="btn btn-primary mr-[10px] bg-[#FF3811] border-[#FF3811] text-white ">Discover More</button>
                                    <button className="btn btn-outline border-[#fff] text-white ">Latest Project</button>
                                </div>
                            </div>
                        </div>

                        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 z-10">
                            <a href="#slide2" className="btn btn-circle mr-5">❮</a> 
                            <a href="#slide4" className="btn btn-circle">❯</a>
                        </div>
                    </div> 
                    
                    <div id="slide4" className="carousel-item relative w-full h-[600px] overlay">
                        <img src={bannerImg4} className="w-full object-cover object-top rounded-xl" />
                        <div className="absolute flex justify-start transform -translate-y-1/2 left-5 right-5 top-1/2 z-10 px-[60px]">
                            <div className='text-white max-w-[550px] text-[18px] space-y-7'>
                                <h1 className='font-bold text-[72px]'>Affordable Price For Car Servicing</h1>
                                <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>

                                <div>
                                    <button className="btn btn-primary mr-[10px] bg-[#FF3811] border-[#FF3811] text-white ">Discover More</button>
                                    <button className="btn btn-outline border-[#fff] text-white ">Latest Project</button>
                                </div>
                            </div>
                        </div>
                        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 z-10">
                            <a href="#slide3" className="btn btn-circle mr-5">❮</a> 
                            <a href="#slide1" className="btn btn-circle">❯</a>
                         </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;