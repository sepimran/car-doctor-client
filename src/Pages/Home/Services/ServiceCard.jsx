import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ServiceCard = ({service}) => {
   const {_id ,title ,img ,price , description , facility} = service;
   console.log(service);
    return (
        <div className="card w-96 bg-base-100 w-full border-[#E8E8E8] border-[1px] ">
            <figure className="px-[20px] pt-[20px]">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title text-start w-full text-[25px] font-bold">{title}</h2>
                <div className="card-actions flex w-full justify-between items-center">
                    <h3 className='text-[#FF3811] font-bold text-[20px] '>Price: {price}</h3>
                    <Link to={_id}><button className="btn bg-[#fff] border-0"><FaArrowRight /> </button></Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;