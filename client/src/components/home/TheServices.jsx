import React from "react";

import { GiCompass, GiDiamondHard, GiStabbedNote } from 'react-icons/gi';


const TheServices = () => {
    return (
        <div className="bg-secondary-200 px-8 py-24">
            <div className="xl:w-[85%] mx-auto">

                <div className="flex justify-between mb-12">
                    <h3 className="text-3xl text-[#453227] capitalize tracking-wide font-semibold w-1/2">explore our top orders <br /> and find something new</h3>
                    <p className="w-1/2 leading-relaxed text-[#795744]">We’re excited to showcase our curated selection of top orders designed to elevate your computing experience. Whether you’re a gamer seeking the ultimate rig, a professional in need of efficient workstations, or a casual user looking for a reliable laptop, we have something for everyone. </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 text-center">

                    <div className="flex flex-col items-center bg-[#c5a491] py-12 px-8 rounded">
                        <span className="flex justify-center items-center w-16 h-16 mb-4 rounded-full text-3xl bg-[#eaded7]"><GiCompass /></span>
                        <h4 className="capitalize text-2xl mb-3 font-bold">mission</h4>
                        <p className="leading-relaxed text-[#5f4435]">Our mission is to empower individuals and businesses by providing innovative technology solutions that enhance productivity, creativity, and overall digital experiences. We strive to deliver a diverse range of high-quality orders combined with exceptional customer service, making technology accessible and enjoyable for everyone.
                        </p>
                    </div>

                    <div className="flex flex-col items-center bg-[#c5a491] py-12 px-8 rounded">
                        <span className="flex justify-center items-center w-16 h-16 mb-4 rounded-full text-3xl bg-[#eaded7]"><GiDiamondHard /></span>
                        <h4 className="capitalize text-2xl mb-3 font-bold">vision</h4>
                        <p className="leading-relaxed text-[#5f4435]">Our vision is to be a leading destination for technology solutions, known for our commitment to excellence, innovation, and community engagement. We envision a future where everyone can harness the power of technology to achieve their goals, and we aim to inspire our customers with the latest advancements that reshape how we live, work, and connect.</p>
                    </div>

                    <div className="flex flex-col items-center bg-[#c5a491] py-12 px-8 rounded">
                        <span className="flex justify-center items-center w-16 h-16 mb-4 rounded-full text-3xl bg-[#eaded7]"><GiStabbedNote /></span>
                        <h4 className="capitalize text-2xl mb-3 font-bold">history</h4>
                        <p className="leading-relaxed text-[#5f4435]">Our dedication to quality and customer satisfaction has fueled our growth, allowing us to build lasting relationships with both customers and suppliers. With a team of experts who share our vision and values, we remain committed to staying ahead of industry trends and consistently delivering the best in technology.</p>
                    </div>

                </div>
            </div>
        </div>
    );
};



export default TheServices;