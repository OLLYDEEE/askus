// import React from 'react'

import Image from "next/image";

const Hero = () => {
  return (
    <div className="bg-[url('/bg.svg')] relative w-full  h-screen px-[100px]">
      <div className="pt-[24px] flex justify-between items-center">
        <Image src="/logo.svg" alt="" width={155} height={53} />

        <button className="px-[27px] py-[14px] bg-gradient-to-r text-[20px] from-[#0477FE] to-[#0023FF] text-white rounded-[10px]">
          Get Started
        </button>
      </div>

      {/* Content */}
      <div className="flex justify-center items-center w-full  mt-[80px] gap-[40px]">
        <div className="w-1/2">
          <h1 className="font-poppins text-[52px] font-[700] ">
            Welcome to <br />
            <span className="text-[#0477FE]">Askus Anytime</span>
          </h1>

          <p className="max-w-[659px] font-poppins text-[20px] text-[#161616] mt-[10px] mb-[50px] font-[400] ">
            Your reliable platform of online legal assistance in any conflict
            provides expert guidance across diverse legal questions, ensuring
            clarity and informed decisions. Trust us for comprehensive and
            accessible legal help tailored to your needs.
          </p>

          <button className="px-[27px] py-[18px] bg-gradient-to-r text-[20px] from-[#0477FE] to-[#0023FF] text-white rounded-[10px]">
            Get Started
          </button>
        </div>

        <div className="bg-white max-w-[600] w-1/2  h-auto rounded-[20px]">
          <div className="flex justify-center flex-col px-[20px] pt-[30px]">
            <h2 className="whitespace-nowrap text-[32px] font-[700] font-poppins">
              Setup & Start 3-Day Trial
            </h2>
            <p className="mt-[10px] text-[16px] font-poppins">
              Unlimited Questions, Unlimited Answers just £5 for 3 days!
            </p>
          </div>

          <div className="flex justify-center flex-col px-[20px] py-[30px]">
            <div className="">
              <p className="text-[18px] font-poppins font-[400] ">
                Phone Number
              </p>
              <input
                type="number"
                className="px-3 py-2 outline-none w-full border rounded-[10px] border-[#16161633] h-[50px] mt-[10px] shadow-lg shadow-[#0477FE26]"
              />
            </div>

            <div className="mt-[30px]">
              <p className="text-[18px] font-poppins font-[400] ">OTP</p>
              <input
                type="number"
                className="px-3 py-2 outline-none w-full border rounded-[10px] border-[#16161633] h-[50px] mt-[10px] shadow-lg shadow-[#0477FE26]"
              />

              <div className="flex justify-end items-center text-[#0477FE] font-poppins font-[400] text-[16px]    ">
                Resend code
              </div>
            </div>

<div className="flex items-center mt-4 gap-[8px]">
  <input type="checkbox" className="" />
  <p className="">I agree to Askusat’s {' '}
    <a href="" className="text-[#0477FE]">Terms of Service</a></p>
</div>

{/* <button className="w-fit mt-[51px]  "> 
 <p className="bg-gradient-to-r text-[20px] text-white from-[#0477FE] to-[#0023FF] px-[82px] py-[18]">Chat Now</p>
</button> */}

<div className="pt-[31px]">

<button className="px-[82px] py-[18px] bg-gradient-to-r text-[20px] from-[#0477FE] to-[#0023FF] text-white rounded-[10px]">
          Chat Now 
        </button>
  
</div>


          </div>
        </div>
      </div>

      {/* Round stuff */}
      <div className="absolute bottom-0 left-0">
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

      <div className="absolute right-0 top-0">
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
