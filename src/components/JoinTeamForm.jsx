import React, { useState, useRef } from "react";
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import { isValidPhoneNumber } from "react-phone-number-input/input";
import { motion } from "framer-motion";
import AnimatedCharacters from "./Contact/AnimatedCharacters";
import SendBtn from "./pagesection/SendBtn";
import { ImAttachment } from "react-icons/im";
import { FaThumbsUp } from "react-icons/fa";
import styles from "./style";
import "./Contact/attachFile.css";
import axios from 'axios';

const positions = [
    {
        label: "Marketing Manager",
        value: "Marketing Manager",
    },
    {
        label: "HR ( Human Resources )",
        value: "HR ( Human Resources )",
    },
    {
        label: "Web Developer",
        value: "Web Developer",
    },
    {
        label: "Graphic Designer",
        value: "Graphic Designer",
    },
    {
        label: "Digital Marketing Manager",
        value: "Digital Marketing Manager",
    },
    {
        label: "Social Media Manager",
        value: "Social Media Manager",
    },
    {
        label: "Video Editor",
        value: "Video Editor",
    },
    {
        label: "Content Writer",
        value: "Content Writer",
    },
];

const JoinTeamForm = () => {
    const placeholderText = [
        { type: "heading1", text: "Hello" },
        {
            type: "heading2",
            text: "Do you want to join our squad?",
        },
        {
            type: "heading2",
            text: "Complete the form provided below.",
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
        console.log(event);
        console.log(selectedFile.length);
        let myArray;
        try {
            myArray = event.target.files[0].name.split(".");
        } catch (error) {
            myArray = [];
        }
        const str = myArray[myArray.length - 1];
        if (!myArray.length && isFilePicked) {
            setIsFilePicked(false);
            console.log(selectedFile.length);
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
    const [user_position, setUser_position] = useState('');
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
        formData.append('user_position', user_position);
        formData.append('message', message);
    
        if (attachment) {
            formData.append('attachment', attachment);
        }

        setLoading(true); // Start loading animation
    
        try {
            const response = await axios.post('https://sendemail.codestrela.in/api/send-career-email', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            alert('Email sent successfully');
            // Reset form
            window.location.reload();
            // setUser_name('');
            // setUser_email('');
            // setUser_position('');
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
            >
                <motion.div
                    initial="hidden"
                    // animate="visible"
                    // animate={replay ? "visible" : "hidden"}
                    animate="visible"
                    variants={container}
                >
                    <div className="container">
                        {placeholderText.map((item, index) => {
                            return <AnimatedCharacters {...item} key={index} />;
                        })}
                    </div>
                </motion.div>
                {/* form start */}
                <div className="py-20">
                    <form onSubmit={handleSubmit} >
                        <div className="grid grid-cols-2 text-white gap-y-8">
                            {/* input and label start */}
                            <div className="md:pr-8 col-span-2 md:col-span-1 ">
                                <label htmlFor="name" className="block text-sm font-medium ">
                                    Your name:
                                </label>
                                <input
                                    type="text" 
                                    value={user_name} 
                                    onChange={(e) => setUser_name(e.target.value)} 
                                    autoComplete="name"
                                    required
                                    className="w-full my-2 h-14 bg-[#111111] border border-[#464549] rounded focus:outline-none focus:ring-1 focus:ring-[#2c2c2c]  p-5 "
                                />
                            </div>
                            {/* input and label end */}

                            {/* input and label start */}
                            <div className="md:pr-8 col-span-2 md:col-span-1 ">
                                <label htmlFor="phone" className="block text-sm font-medium ">
                                    Phone:
                                </label>
                                <PhoneInput
                                    international
                                    defaultCountry="IN"
                                    value={value}
                                    onChange={setValue}
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
                            <div className="md:pr-8 col-span-2 md:col-span-1 ">
                                <label htmlFor="email" className="block text-sm font-medium">
                                    Email address:
                                </label>
                                <input
                                    type="email" 
                                    value={user_email} 
                                    onChange={(e) => setUser_email(e.target.value)} 
                                    autoComplete="email"
                                    required
                                    className="w-full my-2 h-14 bg-[#111111] border border-[#464549] rounded focus:outline-none focus:ring-1 focus:ring-[#2c2c2c]  p-5"
                                />
                            </div>
                            {/* input and label end */}

                            {/* input and label start */}
                            <div className="md:pr-8 col-span-2 md:col-span-1 ">
                                <label htmlFor="position" className="block text-sm font-medium">
                                    Positions:
                                </label>
                                {/* <input id="city" name="city" type="text" autoComplete="phone" required className='w-full my-2 h-14 bg-zinc-800 outline-none px-5 rounded-sm' /> */}
                                <select     
                                    onChange={(e) => setUser_position(e.target.value)}
                                    value={user_position} // Ensure value is being tracked
                                    required
                                    className="w-full my-2 h-14 bg-[#111111] border border-[#464549] rounded focus:outline-none focus:ring-1 focus:ring-[#2c2c2c]  p-2"
                                >
                                    <option value="" disabled>Select a position</option> {/* Default placeholder option */}
                                    {positions.map((position) => (
                                        <option key={position.value} value={position.value}>{position.label}</option>
                                    ))}
                                </select>
                            </div>
                            {/* input and label end */}

                            {/* textarea and label start */}
                            <div className="md:pr-8 col-span-2">
                                <label htmlFor="message" className="block text-sm font-medium">
                                    Messaage:
                                </label>
                                <textarea
                                    rows="6"
                                    value={message} 
                                    onChange={(e) => setMessage(e.target.value)} 
                                    type="text"
                                    autoComplete="message"
                                    required
                                    className="w-full my-2 bg-[#111111] border border-[#464549] rounded focus:outline-none focus:ring-1 focus:ring-[#2c2c2c]  p-5"
                                />
                            </div>
                            {/* textarea and label end */}

                            <div className="grid md:flex  md:justify-between items-center col-span-2 md:pr-8">
                                {/* file upload start */}
                                <div className="rounded-full w-full md:w-[80%] grid md:flex md:justify-between items-center relative">
                                    <div
                                        id="attach-box"
                                        className="glow-on-hover min-w-[195px]  relative grid md:items-center bg-[#111111] border border-[#464545] rounded-full"
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
                                                    className="absolute w-[60px] h-[60px] rounded-full p-6 z-[-1] top-0 transition-all duration-500 ease-in-out"
                                                    id="upload-button"
                                                    accept=".pdf, .docx, .doc"                                                    
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
                                                    className="text-[18px] font-small text-center w-[280px] file-attach px-10 overflow-hidden pr-[74px] pl-[20px] h-[60px] flex items-center whitespace-nowrap"
                                                >
                                                    Loading...
                                                </label>
                                            ) : isFilePicked && selectedFile.length > 0 ? (
                                                <label
                                                    htmlFor="file-upload"
                                                    className="text-[18px] font-small text-center w-[280px] file-attach px-10 overflow-hidden pr-[74px] pl-[20px] h-[60px] flex items-center whitespace-nowrap"
                                                >
                                                    {selectedFile}
                                                </label>
                                            ) : (
                                                <label
                                                    htmlFor="file-upload"
                                                    className="text-[18px] font-small text-center pl-[74px] pr-[20px] h-[60px] flex items-center whitespace-nowrap"
                                                >
                                                    Attach Files
                                                </label>
                                            )}
                                        </div>
                                        {/* file input */}
                                        <div className="absolute z-10 h-full">
                                            <input
                                                className=" opacity-0 cursor-pointer  w-full h-full"
                                                id="small_size"
                                                type="file"
                                                accept=".pdf, .docx, .doc"
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
            </div>
        </>
    );
};

export default JoinTeamForm
