import React from 'react'
import Marquee from 'react-fast-marquee'

const HomeContact = () => {
    return (
        <>
            <div className="w-full py-40z flex flex-col justify-center items-center text-white py-[150px]">
                <Marquee
                    direction="left"
                    speed={75}
                    className="custom_marque overflow-hidden"
                >
                    <h2 className=" text-3xl md:text-6xl">
                        {" "}
                        Let’s talk — Contact us — Let’s talk — Contact us — Let’s talk —
                        Contact us — Let’s talk — Contact us — Let’s talk — Contact us —
                        Let’s talk — Contact us — Let’s talk — Contact us —{" "}
                    </h2>
                </Marquee>

                <button
                    onClick={(event) => (window.location.href = "/contact")}
                    className="w-[100px] h-[100px] md:w-[150px] md:h-[150px]  flex justify-center items-center rounded-full absolute z-10 homeContactBtn"
                >
                    <svg
                        width="30"
                        height="30"
                        viewBox="0 0 30 30"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            className="homeMailSvg"
                            d="M23.4375 16.875L22.1119 18.2006L24.5316 20.625H16.875C15.8804 20.625 14.9266 21.0201 14.2233 21.7234C13.5201 22.4266 13.125 23.3804 13.125 24.375C13.125 25.3696 13.5201 26.3234 14.2233 27.0266C14.9266 27.7299 15.8804 28.125 16.875 28.125H18.75V26.25H16.875C16.3777 26.25 15.9008 26.0525 15.5492 25.7008C15.1975 25.3492 15 24.8723 15 24.375C15 23.8777 15.1975 23.4008 15.5492 23.0492C15.9008 22.6975 16.3777 22.5 16.875 22.5H24.5316L22.11 24.9253L23.4375 26.25L28.125 21.5625L23.4375 16.875Z"
                            fill="black"
                        ></path>
                        <path
                            className="homeMailSvg"
                            d="M9.375 20.625H3.75L3.74719 6.47438L14.4666 13.8956C14.6233 14.0041 14.8094 14.0622 15 14.0622C15.1906 14.0622 15.3767 14.0041 15.5334 13.8956L26.25 6.47812V15H28.125V5.625C28.1245 5.12787 27.9268 4.65125 27.5753 4.29972C27.2238 3.9482 26.7471 3.7505 26.25 3.75H3.75C3.25321 3.75 2.77672 3.94716 2.42517 4.29818C2.07362 4.6492 1.87575 5.12539 1.875 5.62219V20.625C1.87574 21.1221 2.07353 21.5985 2.425 21.95C2.77647 22.3015 3.25295 22.4993 3.75 22.5H9.375V20.625ZM24.1866 5.625L15 11.985L5.81344 5.625H24.1866Z"
                            fill="black"
                        ></path>
                    </svg>
                </button>

                {/* contact button end */}
            </div>
        </>
    );
};

export default HomeContact
