import React from 'react'
import ClientData from './ClientData';

const AboutSecFour = () => {
    return (
        <>
            <div
                name="experience"
                className=" w-full h-full md:h-full px-6 lg:py-18 py-[30px]"
            >
                <div className="max-w-screen-lg mx-auto  flex flex-col justify-center w-full md:h-full text-white">
                    <div>
                        <h2 className="text-4xl  inline">Our esteemed patrons</h2>
                        <p className="py-6">
                            Amongst the privileged few, our esteemed patrons grace us with
                            their discerning taste, unwavering support, and a shared passion
                            for extraordinary experiences.
                        </p>
                    </div>

                    <div className="w-full grid grid-cols-2 md:grid-cols-5 gap-8 text-center py-8 md:px-20 sm:px-0">
                        {ClientData.map(({ id, imgSrc, styleData }) => (
                            <div
                                key={id}
                                className={`shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] hover:scale-105 duration-500 py-2 rounded-lg`}
                            >
                                <img
                                    src={imgSrc}
                                    alt="client"
                                    className="md:max-w-[90%] w-full mx-auto"
                                    style={{ filter: styleData }}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutSecFour
