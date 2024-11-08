import React from "react";
import { Link } from "react-router-dom";


const Overview = () => {
    return (
        <div className="w-full bg-[#f1f5f8] py-32 text-center">
            <div className="px-3 lg:px-0 lg:w-[55%] mx-auto">
                <h2 className="font-extrabold text-5xl text-[#242833] capitalize mb-10 tracking-widest leading-10">Company Overview</h2>
                <p className="text-lg text-[#555] tracking-widest font-normal mb-5 leading-7">Welcome to Future Shop — where innovation meets reliability!</p>
                <p className="text-lg text-[#555] tracking-widest font-normal mb-5 leading-7">we are dedicated to providing top-of-the-line computer hardware and accessories tailored to meet the diverse needs of our customers. Whether you are a casual user, a gaming enthusiast, or a professional seeking high-performance machines, our extensive lineup of computers, laptops, and peripherals ensure that we have the perfect solution for everyone.</p>
                <Link className="inline-block px-6 py-3 font-semibold tracking-wider text-white bg-primary uppercase mt-8 text-lg hover:bg-secondary-200 transition-all duration-300" to='/about'>
                    View More
                </Link>
            </div>
        </div>
    );
};


export default Overview;