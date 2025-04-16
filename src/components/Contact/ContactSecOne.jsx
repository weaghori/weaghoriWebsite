import React, { useState, useRef } from "react";
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import { isValidPhoneNumber } from 'react-phone-number-input/input'
// import "react-phone-number-input/style.css";
import { motion } from 'framer-motion'
import SendBtn from '../pagesection/SendBtn'
import { ImAttachment } from 'react-icons/im'
import { FaThumbsUp } from 'react-icons/fa'
import styles from '../style'
import "./attachFile.css";
import AnimatedCharacters from './AnimatedCharacters'
import emailjs from 'emailjs-com';
import axios from 'axios';

const ContactSecOne = () => {
    // to send email
    const form = useRef();

    // const sendEmail = (e) => {
    //     e.preventDefault();

    //     emailjs
    //         .sendForm(
    //             'service_123',
    //             'template_123',
    //             form.current,
    //             '1234'
    //         )
    //         .then(
    //             (result) => {
    //                 alert('Email sent successfully!');
    //             },
    //             (error) => {
    //                 // alert('Failed to send email: ' + error.text);
    //                 alert('Failed to send email: ');
    //             }
    //         );
    // };
    const [status, setStatus] = useState('idle'); // idle, processing, success, error

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     setStatus('processing');

    //     try {
    //         // Simulate sending email
    //         await new Promise((resolve) => setTimeout(resolve, 2000)); // Mocking API call

    //         // If successful
    //         setStatus('success');
    //         setTimeout(() => {
    //             setStatus('idle');
    //             e.target.reset(); // Reset form
    //         }, 2000); // Reset after 2 seconds
    //     } catch (error) {
    //         // If there is an error
    //         setStatus('error');
    //         setTimeout(() => setStatus('idle'), 2000); // Reset after 2 seconds
    //     }
    // };

    // Placeholder text data, as if from API
    const placeholderText = [
        { type: "heading1", text: "Hello!" },
        {
            type: "heading2",
            text: "Connect with us today and let's embark on a journey to transform your brand's vision into a resounding reality.",
        },
    ];

    const container = {
        visible: {
            transition: {
                staggerChildren: 0.025,
            },
        },
    };

    const [value, setValue] = useState();
    let mobile = `${value}`;

    // Attach file
    const [selectedFile, setSelectedFile] = useState("");
    const [isFilePicked, setIsFilePicked] = useState(false);
    const [attachLoader, setAttachLoader] = useState(false);

    const changeHandler = (event) => {
        let myArray;
        try {
            myArray = event.target.files[0].name.split(".");
        } catch (error) {
            myArray = [];
        }
        const str = myArray[myArray.length - 1];
        if (!myArray.length && isFilePicked) {
            setIsFilePicked(false);
            setSelectedFile("");
        } else if (str !== "doc" && str !== "docx" && str !== "pdf") {
            alert("Please select doc or docx or pdf file");
            setIsFilePicked(false);
            selectedFile();
        } else {
            setAttachLoader(true);
            setIsFilePicked(true);
            if (event.target.files[0].name.toString().length > 15) {
                setSelectedFile(
                    event.target.files[0].name.substring(0, 13) +
                    "..." +
                    event.target.files[0].name.substring(
                        event.target.files[0].name.length - 6
                    )
                );
            } else {
                setSelectedFile(event.target.files[0].name);
            }
            document
                .getElementById("attach-box")
                .classList.add("attach-loading-border");
            setTimeout(() => {
                setAttachLoader(false);
                document
                    .getElementById("attach-box")
                    .classList.remove("attach-loading-border");
            }, 2000);
        }
    };

    // send email
    const [user_name, setUser_name] = useState('');
    const [user_email, setUser_email] = useState('');
    const [user_phone, setUser_phone] = useState('');
    const [user_city, setUser_city] = useState('');
    const [message, setMessage] = useState('');
    const [attachment, setAttachment] = useState(null);
    const [loading, setLoading] = useState(false); // Track loading state

    // Ref to access the file input DOM element
    const fileInputRef = useRef(null);

    const handleFileChange = (e) => {
        setAttachment(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        if (!user_name || !user_email || !message) {
            alert('Please fill in all the required fields');
            return;
        }
    
        if (attachment && attachment.size > 2 * 1024 * 1024) {
            alert('Attachment size exceeds the 2MB limit');
            return;
        }
    
        const formData = new FormData();
        formData.append('user_name', user_name);
        formData.append('user_email', user_email);       
        formData.append('user_phone', value);
        formData.append('user_city', user_city);
        formData.append('message', message);
    
        if (attachment) {
            formData.append('attachment', attachment);
        }

        setLoading(true); // Start loading animation
    
        try {
            const response = await axios.post('https://sendemail.codestrela.in/api/send-email', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            alert('Email sent successfully');
            // Reset form
            window.location.reload();
            // setUser_name('');
            // setUser_email('');
            // setUser_city('');
            // setMessage('');
            // setValue('');
            // setAttachment(null);

            // // Manually reset the file input value
            // if (fileInputRef.current) {
            //     fileInputRef.current.value = null;
            // }
            // // Reset the entire form
            // e.target.reset();
        } catch (error) {
            console.error('There was an error sending the email:', error.response || error.message);
            alert('There was an error sending the email: ' + (error.response?.data?.message || error.message));
        } finally {
            setLoading(false); // Stop loading animation
        }
    };

    return (
        <>
            <div
                className={`${styles.maxContainerWidth}  py-16 flex flex-col text-white mx-auto px-6 !pt-[110px]`}
                style={{ fontFamily: "Manrope !important" }}
            >
                <motion.div
                    initial="hidden"
                    // animate="visible"
                    // animate={replay ? "visible" : "hidden"}
                    animate="visible"
                    variants={container}
                >
                    <div className="container text-[28px] leading-[1] lg:leading-[2]">
                        {placeholderText.map((item, index) => {
                            return <AnimatedCharacters {...item} key={index} />;
                        })}
                    </div>
                </motion.div>
                {/* content end */}
                {/* form start */}
                <div className="lg:py-20">
                    {/* <form ref={form} onSubmit={sendEmail}> */}
                    <form onSubmit={handleSubmit} >
                        <div className="grid grid-cols-2 text-white gap-y-8">
                            {/* input and label start */}
                            <div
                                className="md:pr-8 col-span-2 md:col-span-1 "
                                style={{ fontFamily: "Manrope" }}
                            >
                                <label htmlFor="name" className="block text-sm font-medium ">
                                    Your name:
                                </label>
                                <input
                                    type="text" 
                                    value={user_name} 
                                    onChange={(e) => setUser_name(e.target.value)} 
                                    // style={{ fontFamily: '"Manrope", sans-serif !important' }}
                                    required
                                    className="w-full my-2 h-14 bg-[#111111] border border-[#464549] rounded focus:outline-none focus:ring-1 focus:ring-[#2c2c2c]  p-5 "
                                />
                            </div>
                            {/* input and label end */}

                            {/* input and label start */}
                            <div
                                className="md:pr-8 col-span-2 md:col-span-1 "
                                style={{ fontFamily: "Manrope" }}
                            >
                                <label htmlFor="phone" className="block text-sm font-medium ">
                                    Phone:
                                </label>
                                <PhoneInput
                                    international
                                    defaultCountry="IN"
                                    value={value}
                                    onChange={setValue}
                                    // onChange={(e) => setValue(e.target.value)}
                                    className="w-full my-2 h-14 bg-[#111111] border border-[#464549] rounded focus:outline-none focus:ring-1 focus:ring-[#2c2c2c]  p-5"
                                />
                                {!isValidPhoneNumber(mobile) && value > 1000000000 && (
                                    <span className="text-red-400">
                                        Enter valid mobile number
                                    </span>
                                )}
                            </div>
                            {/* input and label end */}

                            {/* input and label start */}
                            <div
                                className="md:pr-8 col-span-2 md:col-span-1 "
                                style={{ fontFamily: "Manrope" }}
                            >
                                <label htmlFor="email" className="block text-sm font-medium">
                                    Email address:
                                </label>
                                <input
                                    type="email" 
                                    value={user_email} 
                                    onChange={(e) => setUser_email(e.target.value)} 
                                    required
                                    className="w-full my-2 h-14 bg-[#111111] border border-[#464549] rounded focus:outline-none focus:ring-1 focus:ring-[#2c2c2c]  p-5"
                                />
                            </div>
                            {/* input and label end */}

                            {/* input and label start */}
                            <div
                                className="md:pr-8 col-span-2 md:col-span-1 "
                                style={{ fontFamily: "Manrope" }}
                            >
                                <label htmlFor="city" className="block text-sm font-medium">
                                    Country/City:
                                </label>
                                <input
                                    type="text"                 
                                    value={user_city} 
                                    onChange={(e) => setUser_city(e.target.value)}
                                    required
                                    className="w-full my-2 h-14 bg-[#111111] border border-[#464549] rounded focus:outline-none focus:ring-1 focus:ring-[#2c2c2c]  p-5"
                                />
                            </div>
                            {/* input and label end */}

                            {/* textarea and label start */}
                            <div
                                className="md:pr-8 col-span-2"
                                style={{ fontFamily: "Manrope" }}
                            >
                                <label htmlFor="message" className="block text-sm font-medium">
                                    Project Details:
                                </label>
                                <textarea
                                    rows="6"
                                    value={message} 
                                    onChange={(e) => setMessage(e.target.value)} 
                                    placeholder="Your message"
                                    type="text"
                                    autoComplete="message"
                                    required
                                    className="w-full my-2 bg-[#111111] border border-[#464549] rounded focus:outline-none focus:ring-1 focus:ring-[#2c2c2c]  p-5"
                                />
                            </div>
                            {/* textarea and label end */}

                            <div className="file-send-button flex md:justify-between md:items-center col-span-2 md:pr-8 gap-[10px]">
                                {/* file upload start */}
                                <div className="rounded-full w-full md:w-[80%] grid md:flex md:justify-between items-center relative">
                                    <div
                                        id="attach-box"
                                        className="glow-on-hover min-w-[195px] relative grid md:items-center bg-[#111111] border border-[#464545] rounded-full"
                                    >
                                        {/* attach and label */}
                                        <div className="relative flex items-center">
                                            <div
                                                className={
                                                    isFilePicked
                                                        ? "overflow-hidden order-last z-50 transition-all duration-500 cursor-pointer"
                                                        : "z-50 transition-all duration-500 cursor-pointer"
                                                }
                                            >
                                                <input
                                                    type="file"
                                                    accept="application/pdf, application/docx, /applicationdoc"
                                                    className="absolute w-[60px] h-[60px] rounded-full p-6 z-[-1] top-0 transition-all duration-500 ease-in-out"
                                                    id="upload-button"
                                                    ref={fileInputRef}
                                                    onChange={(e) => {
                                                        changeHandler(e); // Call first function
                                                        setAttachment(e.target.files[0]); // Call second function to set state
                                                    }} 
                                                    hidden
                                                />
                                                <label
                                                    htmlFor="upload-button"
                                                    className={
                                                        isFilePicked
                                                            ? "right-upload w-[60px] h-[60px] flex justify-center items-center attach-icon attach-thump text-center rounded-full  p-3 z-10 absolute top-0 left-[calc(100%-60px)] transition-all duration-500 ease-in-out"
                                                            : " w-[60px] h-[60px] flex justify-center items-center attach-icon attach-icon-left text-center rounded-full p-3 z-10 absolute top-0 left-0 transition-all duration-500 ease-in-out"
                                                    }
                                                >
                                                    {!isFilePicked ? (
                                                        <ImAttachment className="attach-main-icon" />
                                                    ) : (
                                                        <FaThumbsUp className="attach-main-icon" />
                                                    )}
                                                </label>
                                            </div>
                                            {attachLoader ? (
                                                <label
                                                    htmlFor="file-upload"
                                                    style={{ fontFamily: "Manrope" }}
                                                    className="text-[18px] font-small text-center w-[280px] file-attach px-10 overflow-hidden pr-[74px] pl-[20px] h-[60px] flex items-center whitespace-nowrap"
                                                >
                                                    Loading...
                                                </label>
                                            ) : isFilePicked && selectedFile.length > 0 ? (
                                                <label
                                                    htmlFor="file-upload"
                                                    style={{ fontFamily: "Manrope" }}
                                                    className="text-[18px] font-small text-center w-[280px] file-attach px-10 overflow-hidden pr-[74px] pl-[20px] h-[60px] flex items-center whitespace-nowrap"
                                                >
                                                    {selectedFile}
                                                </label>
                                            ) : (
                                                <label
                                                    htmlFor="file-upload"
                                                    style={{ fontFamily: "Manrope" }}
                                                    className="text-[18px] font-small text-center pl-[74px] pr-[20px] h-[60px] flex items-center whitespace-nowrap"
                                                >
                                                    Attach Files
                                                </label>
                                            )}
                                        </div>
                                        {/* file input */}
                                        <div
                                            className="absolute z-10 h-full"
                                            style={{ fontFamily: "Manrope" }}
                                        >
                                            <input
                                                type="file"
                                                accept="application/pdf, application/docx, application/doc"
                                                className=" opacity-0 cursor-pointer  w-full h-full"
                                                id="small_size"
                                                ref={fileInputRef}
                                                onChange={(e) => {
                                                    changeHandler(e); // Call first function
                                                    setAttachment(e.target.files[0]); // Call second function to set state
                                                }}
                                            />
                                        </div>
                                    </div>
                                    {isFilePicked ? (
                                        ""
                                    ) : (
                                        <div className="w-full py-4">
                                            <p className="block text-sm font-medium px-4">
                                                *.doc, *.docx, *.pdf
                                            </p>
                                        </div>
                                    )}
                                </div>
                                {/* file upload end */}

                                <div className="w-fit send-button">
                                    <SendBtn title="Send request" type="submit" disabled={loading} >
                                        {loading ? 'Sending...' : 'Send Email'}
                                    </SendBtn>
                                    {/* Show spinner when loading is true */}
                                    {loading && (
                                        <div className="spinner-overlay">
                                            <div className="spinner"></div>
                                        </div>
                                    )} {/* Spinner or animation */} 
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                {/* form end */}
                {/* get in touch start */}
                <div className={`w-full mx-auto sm:mt-12`}>
                    <h2
                        className="text-3xl text-white"
                        style={{ fontFamily: "manrope !important" }}
                    >
                        Our Offices
                    </h2>

                    <div className="w-full">
                        <h4 className="text-[14px] text-lightText"></h4>
                        <div className="flex justify-between py-10 gap-20 flex-col md:flex-row">
                            <div>
                                <p
                                    className="text-[16px] text-white "
                                    style={{ fontFamily: "manrope !important" }}
                                >
                                    <p>Mumbai - Maharashtra</p>
                                    <p>Aghori Media House Pvt. Ltd.</p>
                                    <br />
                                    <span
                                        className="text-lightText"
                                        style={{ fontFamily: "manrope !important" }}
                                    >
                                        204, Vaishali Shopping Center, Next to Natraj Market,
                                        S.V.Road, Malad West, Mumbai, 400064.
                                    </span>
                                </p>

                                {/* <h3 className="py-3 text-lightText font-semibold">
                  <a
                    href="https://goo.gl/maps/hjfcP7eEg5wzLk2Q7"
                    target="_blank"
                  >
                    Get Direction
                  </a>
                </h3> */}
                            </div>

                            <div>
                                <p className="text-[16px] text-white ">
                                    <p> Rajkot - Gujarat</p>
                                    <p>Aghori Media House Pvt. Ltd.</p>
                                    <br />
                                    <span className="text-lightText">
                                        409 Infinity, Ayodhya Chowk, Nr. Gokul Mathura, 150 Ft. Ring
                                        Rd, Rajkot-360006.
                                    </span>
                                </p>

                                {/* <h3 className="py-3 text-lightText font-semibold">
                  <a
                    href="https://maps.app.goo.gl/rnbbDjM8wHa4vJ26A"
                    target="_blank"
                  >
                    Get Direction
                  </a>
                </h3> */}
                            </div>

                            <div className="grid gap-4">
                                <div>
                                    <h4 className="text-[14px] text-lightText">
                                        Job & Internship Inquiries:
                                    </h4>
                                    <a href="mailto:careers@weaghori.com">
                                        <li className="text-[14px] text-white list-none">
                                            careers@weaghori.com
                                        </li>
                                    </a>
                                </div>

                                <div>
                                    <h4 className="text-[14px] text-lightText">
                                        Business & PR Inquiries:
                                    </h4>
                                    <a href="mailto:hello@weaghori.com">
                                        <li className="text-[14px] text-white list-none">
                                            hello@weaghori.com
                                        </li>
                                    </a>
                                </div>

                                <div>
                                    <h4 className="text-[14px] text-lightText">
                                        Business Inquiries:
                                    </h4>
                                    <a href="tel: +91 76 000 69 666">
                                        <li className="text-[14px] text-white list-none">
                                            +91 76 000 69 666
                                        </li>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* get in touch end */}

            </div>
        </>
    );
};

export default ContactSecOne
