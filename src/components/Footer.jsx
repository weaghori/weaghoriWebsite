import React from 'react'
import { FaArrowUp } from 'react-icons/fa';
import { Link } from 'react-router-dom'
import CursorIMG from '../assets/images/cursor_up.png';

const Footer = () => {
  const handleReload = () => {
    window.location.reload();
  };

  return (
    <>
      <div className="w-full" id="footer">
        {/* Copyright */}

        <div className="flex flex-col-reverse sm:flex-row justify-between max-w-[90%] mx-auto py-10 opacity-70">
          {/* left side */}
          <div className="grid items-end">
            <div className="flex mt-10 sm:mt-5">
              <a href="/blogs">
                <p className="hover:text-white text-lightText transition duration-100 pr-5 text-[12px] font-mono">
                  Blogs
                </p>
              </a>
              <a href="/privacy-policy">
                <p className="hover:text-white text-lightText transition duration-100 pr-5 text-[12px] font-mono">
                  Privacy Policy 
                </p>
              </a>
              <a href="/terms-and-condition">
                <p className="hover:text-white text-lightText transition duration-100 pr-5 text-[12px] font-mono">
                  Terms & Condition
                </p>
              </a>
            </div>
            <div>
              <p className="text-white text-[12px] leading-4 max-w-[370px] py-4">
                Please, be informed, that the intellectual property rights to
                all the photos, designs, and other materials on this Site belong
                to “Aghori Media House Pvt. Ltd.”. You may request permission to
                use them by contacting us at:{" "}
                <a href="mailto:info@weaghori.com">info@weaghori.com</a>
              </p>
              <h4 className="text-white text-[12px]">
                Copyright 2025. All RIGHTS RESERVED
              </h4>
            </div>
          </div>
          {/* center side */}

          <div className="flex items-end">
            {/* Social Media */}
            <div className="flex mt-5 flex-wrap">
              <a
                href="https://www.facebook.com/weaghori/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white pr-5 text-[14px] font-mono  text-lightText transition duration-100"
              >
                Facebook
              </a>
              <a
                href="https://www.instagram.com/weaghori/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white pr-5 text-[14px] font-mono  text-lightText transition duration-100"
              >
                Instagram
              </a>
              <a
                href="https://twitter.com/weaghori/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white pr-5 text-[14px] font-mono  text-lightText transition duration-100"
              >
                Twitter
              </a>
              <a
                href="https://www.linkedin.com/authwall?trk=gf&trkInfo=AQGaQrzvUQVi2QAAAYM2MFoQPsBTBIX3FGhKJOEVi6-A22aziUy8hq0FQQqSCF-Jhpz_Cnp0y_VGeFiqD4sOruPAA-sJStO2Xsa20uzAv9llJE3L3tvQj5EOEu9fjscPVkIX5n0=&original_referer=https://weaghori.com/&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2Fweaghori%2F"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white pr-5 text-[14px] font-mono  text-lightText transition duration-100"
              >
                LinkedIn
              </a>
              <a
                href="https://www.youtube.com/@weaghori"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white pr-5 text-[14px] font-mono  text-lightText transition duration-100"
              >
                YouTube
              </a>
            </div>
          </div>

          {/* right side */}
          <div>
            {/* Newsletter */}
            <div className="mt-5 sm:mt-5 NewsLetter">
              <h4 className="text-white pr-5 text-[20px]">
                {/* Newsletter */}
                Business Enquiries
              </h4>
              <p className="text-[16px] text-white max-w-[300px] py-2">
                {/* Sign up for updates, insights, case studies and much more. No
                promotions and spamming. */}
                <a href="mailto:hello@weaghori.com">hello@weaghori.com</a>
                <br />
                +91 7600069666
              </p>
              {/* <MailchimpForm /> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer
