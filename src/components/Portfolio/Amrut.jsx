import React from 'react'
import styles from '../style'
import { Link } from 'react-router-dom'
import HomeContact from '../Home/HomeContact'
import { amrutData } from "./PortfolioContents/Index";
import Navigation from '../Navigation';

const Amrut = () => {
    return (
        <>
            <div
                className={`${styles.maxWidth} ${styles.paddingX} mx-auto text-white`}
            >
                {amrutData.map((amrut) => (
                    <>
                        {/* content section start */}
                        <div className="w-full mb-20 pt-[110px]">
                            <h1 className="text-5xl mb-[20px] mt-12">{amrut.title}</h1>
                            <p className="text-xl md:text-xl font-normal mb-6">
                                {amrut.description}
                            </p>
                            <div className="py-8">
                                <h2 className="text-xl">Client</h2>
                                <h3 className="text-[16px]">{amrut.title}</h3>
                                <br />
                                <h2 className="text-xl">Services</h2>
                                <h3 className="text-[16px]">{amrut.services}</h3>
                            </div>
                        </div>
                        {/* content section start */}

                        {/* portfolio images start */}
                        <div className="w-full grid grid-cols-1 gap-10">
                            {amrut.imagesLink.map(({ ImgUrl, id }) => (
                                <div key={id}>
                                    <img src={ImgUrl} alt="port" className="w-full" />
                                </div>
                            ))}
                        </div>
                        {/* portfolio images end */}
                    </>
                ))}

                {/* Navigation start */}
                <Navigation clientName={amrutData[0].routingLabel} />
                {/* Navigation start */}
            </div>

            {/* contact us section start */}
            <div className="w-full">
                <HomeContact />
            </div>
            {/* contact us section  end*/}
        </>
    );
};

export default Amrut
