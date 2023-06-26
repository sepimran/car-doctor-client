import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
    const [services ,setServices] = useState([]);

    useEffect(()=> {
        fetch('services.json')
        .then(res=> res.json())
        .then(data => {
            setServices(data)
        });
    },[])
    return (
        <div className='service-area py-[90px]'>
            <div className="container">
                <div className='w-full text-center space-y-3'>
                    <h4 className='text-[#FF3811] font-bold text-[20px]'>Service</h4>
                    <h2 className="card-title font-bold text-[45px] leading-[1.2] text-center block">Our Service Area</h2>
                    <p>the majority have suffered alteration in some form, by injected humour, <br /> or randomised words which don't look even slightly believable. </p>
                </div>

                <div className='grid grid-cols-3 gap-5 mt-[60px]'>
                     {  services.map(service => 
                    <ServiceCard
                        service={service}
                        key={service._id}
                    ></ServiceCard>)}
                </div>
            </div>
        </div>
    );
};

export default Services;