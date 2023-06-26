import React from 'react';
import aboutPerson from '../../../assets/images/about_us/person.jpg';
import parts from '../../../assets/images/about_us/parts.jpg';

const About = () => {
    return (
        <div className="about-area py-[70px] pb-[100px]">
            <div className="container">
                <div className="card card-side bg-base-100">
                    <div className='w-1/2 relative '>
                        <img src={aboutPerson} className='rounded-xl w-[90%]' alt="Movie"/>
                        <img src={parts} className='rounded-xl absolute right-0 -bottom-[100px] w-1/2 border-[10px] shadow-sm border-[#fff]' alt="Movie"/>
                    </div>
                    <div className="card-body w-1/2 space-y-3">
                        <h4 className='text-[#FF3811] font-bold text-[20px]'>About Us</h4>
                        <h2 className="card-title font-bold text-[45px] leading-[1.2]">We are qualified & of experience in this field</h2>
                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                        <p>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                        <div className="card-actions">
                            <button className="btn btn-primary mr-[10px] bg-[#FF3811] border-[#FF3811] text-white ">Get More Info</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;