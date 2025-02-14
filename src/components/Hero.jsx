"use client";
import React, { useState } from "react";

import Image from "next/image";
import Modal from "./Modal";

const Hero = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <div className="bg-[url('/bg.svg')] relative w-full h-auto md:h-screen px-[20px] md:px-[30px] lg:px-[80px] xl:px-[100px] pb-[33px]">
      <div className="pt-[24px] flex justify-between items-center">
        <Image src="/logo.svg" alt="" width={155} height={53} className="w-[93px] h-[31] md:w-[155px] md:h-[53px]"/>
       
        <button
          className=" xl:px-[27px] px-[12px] py-[5px] md:px-[30px] md:py-[12px] lg:py-[10px]  xl:py-[14px] bg-gradient-to-b text-[12px] md:font-[600] lg:text-[20px] from-[#0477FE] to-[#0023FF] text-white rounded-[5px] md:rounded-[10px] z-10 leading-[25px]"
          onClick={openModal}
        >
          Get Started
        </button>

        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <div className="w-full px-0 md:px-[35px] py-[25px] ">
            <h2 className="text-[22px] md:text-[42px] text-center font-poppins text-[#0477FE] font-bold mb-2">
              Subsription
            </h2>
            <p className="font-poppins text-[#161616] text-[14px] md:text-[20px] text-center font-[400]">
              Join for £5
            </p>

            <div className="mt-2 md:mt-6">
              <div className="inline-flex md:flex items-center gap-[8px] ">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  
                >
                  <path
                    d="M19 11H5C3.89543 11 3 11.8954 3 13V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V13C21 11.8954 20.1046 11 19 11Z"
                    stroke="#161616"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M7 11V7C7 5.67392 7.52678 4.40215 8.46447 3.46447C9.40215 2.52678 10.6739 2 12 2C13.3261 2 14.5979 2.52678 15.5355 3.46447C16.4732 4.40215 17 5.67392 17 7V11"
                    stroke="#161616"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>

                <p className="text-[#EF5F3C]  font-[600] font-poppins text-[14px] md:text-[20px] ">
                  Secure, 1-Click Checkout with Link
                </p>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 9L12 15L18 9"
                    stroke="#161616"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>

              {/* Input Stuff */}
              <div className="mt-[30px] md:gap-[30px] max-w-full flex flex-col md:flex-row md:items-center">
                <div className="">
                  <p className="font-poppins font-[400] text-[14px] md:text-[18px] text-[#161616]">
                    Card Number
                  </p>
                  <input
                    type="number"
                    placeholder="1234 1234 1234 1234"
                    className="px-2 py-1 md:px-3 md:py-2 outline-none w-auto md:w-[320px]  lg:w-[360px] border rounded-[10px] border-[#16161633] h-[50px] mt-[10px] shadow-lg shadow-[#0477FE26]"
                  />
                </div>

                <div className="flex items-center md:justify-center justify-start mt-2 gap-2">
                <div className="">
                  <p className="font-poppins font-[400] text-[14px] md:text-[18px] text-[#161616]">
                    Expiration
                  </p>
                  <input
                    type="number"
                    placeholder="MM / YY"
                    className="px-2 py-1 md:px-3 md:py-2 outline-none w-[120px] lg:w-[160px]  border rounded-[10px] border-[#16161633] h-[50px] mt-[10px] shadow-lg shadow-[#0477FE26]"
                  />
                </div>

                <div className="">
                  <p className="font-poppins font-[400] text-[14px] md:text-[18px] text-[#161616]">
                   CVC
                  </p>
                  <input
                    type="number"
                    placeholder="CVC"
                    className="px-3 py-2 outline-none w-[120px] lg:w-[160px]   border rounded-[10px] border-[#16161633] h-[50px] mt-[10px] shadow-lg shadow-[#0477FE26]"
                  />
                </div>
                </div>
              </div>

              <div className="mt-4 md:mt-[30px] gap-[30px] max-w-full">
                <p className="font-poppins font-[400] text-[14px] md:text-[18px] text-[#161616]">
                  Country
                </p>
                <input
                  type="text"
                  placeholder="India"
                  className="px-3 py-2 outline-none  w-full border rounded-[10px] border-[#16161633] h-[50px] mt-[10px] shadow-lg shadow-[#0477FE26]"
                />
              </div>
            </div>

            <div className="w-full mt-2">
              <p className="font-poppins font-[400] text-[12px] md:text-[16px] text-[#161616]">
              By providing your card information, you allow ASKUS ANYTIME LIMITED to charge your card for future payments in accordance with their terms.
              </p>

              <button className="mt-[30px] rounded-[10px] text-white bg-gradient-to-b from-[#0477FE] to-[#0023FF] w-full font-poppins font-[500] text-[16px] md:text-[25px] text-center py-4">
                Continue
              </button>
            </div>

            {/* <button 
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
            onClick={closeModal}
          >
            Close Modal
          </button> */}
          </div>
        </Modal>
      </div>

      {/* Content */}
      <div className="flex flex-col md:flex-row justify-center items-center w-full mt-[52px] md:mt-[50px] lg:mt-6 xl:mt-[80px] gap-[20px] lg:gap-[40px]">
        <div className="w-full  text-center md:w-1/2 ">
          <h1 className="font-poppins  md:text-start text-[24px] md:text-[30px] lg:text-[42px] xl:text-[52px] font-[700] ">
            Welcome to <br />
            <span className="text-[#0477FE]">Askus Anytime</span>
          </h1>

          <p className="max-w-[659px] md:text-start font-poppins text-[14px] md:text-[16px] xl:text-[20px] text-[#161616] mt-[10px] md:mb-[50px] font-[400] ">
            Your reliable platform of online legal assistance in any conflict
            provides expert guidance across diverse legal questions, ensuring
            clarity and informed decisions. Trust us for comprehensive and
            accessible legal help tailored to your needs.
          </p>

          <button className="hidden sm:py-[15px] sm:px-[30px] md:flex  z-10 lg:px-[27px] py-[18px] bg-gradient-to-r text-[15px] lg:text-[20px] from-[#0477FE] to-[#0023FF] text-white rounded-[10px]">
            Get Started
          </button>
        </div>

        <div className="bg-white mb-[20px] md:mb-0 w-full md:max-w-[600]  md:w-1/2  h-auto rounded-[20px]">
          <div className="flex justify-center flex-col px-[20px] pt-[22px] md:pt-[30px] lg:pt-[20px] xl:pt-[30px]">
            <h2 className="whitespace-nowrap text-[18px] lg:text-[22px] xl:text-[32px] font-[700] font-poppins">
              Setup & Start 3-Day Trial
            </h2>
            <p className="mt-[7px] md:mt-[10px] text-[14px] lg:text-[16px] font-poppins">
              Unlimited Questions, Unlimited Answers just £5 for 3 days!
            </p>
          </div>

          <div className="flex justify-center flex-col px-[20px] py-[10px] lg:py-[30px]">
            <div className="">
              <p className=" text-[14px] lg:text-[18px] font-poppins font-[400] ">
                Phone Number
              </p>
              <input
                type="number"
                className="py-1 px-2 md:px-3 md:py-2 outline-none w-full border rounded-[10px] border-[#16161633] h-[35px] md:h-[50px] lg:mt-[10px] shadow-lg shadow-[#0477FE26]"
              />
            </div>

            <div className="mt-[10px] lg:mt-[20px] xl:mt-[30px]">
              <p className="text-[14px] lg:text-[18px] font-poppins font-[400] ">OTP</p>
              <input
                type="number"
                className="py-1 px-2 md:px-3 md:py-2 outline-none w-full border rounded-[10px] border-[#16161633] h-[35px] md:h-[50px] lg:mt-[10px] shadow-lg shadow-[#0477FE26]"
              />

              <div className="flex mt-1 md:mt-2 justify-end items-center text-[#0477FE] font-poppins font-[400] text-[12px] lg:text-[16px]    ">
                Resend code
              </div>
            </div>

            <div className="flex items-center mt-2 md:mt-4 gap-[8px]">
              <input type="checkbox" className="" />
              <p className="text-[12px] lg:text-[16px] ">
                I agree to Askusat’s{" "}
                <a href="" className="text-[#0477FE]">
                  Terms of Service
                </a>
              </p>
            </div>

            
            <div className="lg:py-[10px] lg:pt-[20px] py-[20px] md:pt-[31px] xl:py-[20px] xl:pt-[31px]">
              <button className="lg:px-[60px] px-[49px] py-[8px] lg:py-[15px] md:px-[40px] md:py-[10px] xl:px-[82px] xl:py-[18px] bg-gradient-to-r text-[12px] lg:text-[20px] from-[#0477FE] to-[#0023FF] text-white rounded-[10px]">
                Chat Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Round stuff */}
      <div className="hidden md:flex absolute bottom-0 left-0">
        {/* <svg width="163" height="342" viewBox="0 0 163 342" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.2" d="M-8 328.877C79.1933 328.877 149.877 258.193 149.877 171C149.877 83.8067 79.1933 13.1226 -8 13.1226C-95.1933 13.1226 -165.877 83.8067 -165.877 171C-165.877 258.193 -95.1933 328.877 -8 328.877Z" stroke="url(#paint0_linear_177_17)" stroke-width="25.7549"/>
<defs>
<linearGradient id="paint0_linear_177_17" x1="-8" y1="26" x2="-8" y2="316" gradientUnits="userSpaceOnUse">
<stop stop-color="#0789FF"/>
<stop offset="1" stop-color="#0477FE"/>
</linearGradient>
</defs>
</svg> */}
        <Image src="/round2.png" alt="" width={120} height={100} />
      </div>

      <div className="hidden md:flex absolute right-0 top-0">
        {/* <svg width="201" height="342" viewBox="0 0 201 342" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.2" d="M171 328.877C258.193 328.877 328.877 258.193 328.877 171C328.877 83.8067 258.193 13.1226 171 13.1226C83.8067 13.1226 13.1226 83.8067 13.1226 171C13.1226 258.193 83.8067 328.877 171 328.877Z" stroke="url(#paint0_linear_177_15)" stroke-width="25.7549"/>
<defs>
<linearGradient id="paint0_linear_177_15" x1="171" y1="26" x2="171" y2="316" gradientUnits="userSpaceOnUse">
<stop stop-color="#0789FF"/>
<stop offset="1" stop-color="#0477FE"/>
</linearGradient>
</defs>
</svg> */}
        <Image src="/round.png" alt="" width={120} height={100} />
      </div>
    </div>
  );
};

export default Hero;
