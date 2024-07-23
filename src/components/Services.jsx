import Image from "next/image";
import React from "react";

const Services = () => {
  return (
    <div className="h-auto relative mb-[40px]">
      <h1 className="text-[32px] text-[#161616] font-poppins font-[700] text-center pt-[40px]">
        Our Online Legal Assistance Services
      </h1>

      <div className="flex justify-between px-[100px] mt-[40px] w-full">
        <div className="flex  flex-col justify-center ">
          <div className="mt-[10px]">
            <p className="font-poppins font-[600] text-[24px] text-[#0477FE] ">
              1. Employment Law Guidance
            </p>
            <p className="font-poppins font-[400] text-[20px] text-[#161616] max-w-[500px]">
              Don’t want to spend hundreds of pounds on legal advice? Get legal
              guidance on employment law from qualified lawyers. Our employment
              legal experts are available 24 hours a day for your assistance.
            </p>
          </div>

          <div className="mt-[50px]">
            <p className="font-poppins font-[600] text-[24px] text-[#0477FE] ">
              3. Family Law and Divorce
            </p>
            <p className="font-poppins font-[400] text-[20px] text-[#161616] max-w-[400px]">
              Navigate divorce proceedings, child custody disputes, and family
              law matters with the support of our legal services for divorce.
            </p>
          </div>

          <div className="mt-[70px]">
            <p className="font-poppins font-[600] text-[24px] text-[#0477FE] ">
              5. Immigration Law
            </p>
            <p className="font-poppins font-[400] text-[20px] text-[#161616] max-w-[400px]">
              If you need an immigration lawyer, UK based, then our immigration
              lawyers can help you with visa applications, residency permits,
              citizenship, and other immigration matters.
            </p>
          </div>
        </div>

        <div className="absolute left-[33%] max-w-[475px]  ">
          <Image src="/lawyer.svg" alt="" width={475} height={674} />
        </div>

        <div className="flex  flex-col  ">
          <div className="">
            <p className="font-poppins font-[600] text-[24px] text-[#0477FE] ">
              2. Criminal Defence
            </p>
            <p className="font-poppins font-[400] text-[20px] text-[#161616] max-w-[400px]">
              Protect your rights and achieve the best possible outcome with our
              criminal defense lawyers who specialise in defending against
              criminal charges and legal proceedings.
            </p>
          </div>

          <div className="mt-[50px]">
            <p className="font-poppins font-[600] text-[24px] text-[#0477FE] ">
              4. Property and Housing Law
            </p>
            <p className="font-poppins font-[400] text-[20px] text-[#161616] max-w-[400px]">
              Resolve property disputes, landlord-tenant issues, lease
              agreements, and property sales with guidance from our
              knowledgeable property dispute lawyers.
            </p>
          </div>

          <div className="mt-[70px]">
            <p className="font-poppins font-[600] text-[24px] text-[#0477FE] ">
              6. Business and Corporate Law
            </p>
            <p className="font-poppins font-[400] text-[20px] text-[#161616] max-w-[400px]">
              Receive business legal support on contract drafting, commercial
              disputes, intellectual property rights, company formation, and
              other business legal issues from our business Law experts.
            </p>
          </div>
        </div>
      </div>
      <div className="py-[40px] flex justify-center items-center">
        <button className="px-4 py-2 border-[2px] text-[#0023FF] text-[20px] font-[500]  border-[#0023FF] border-solid rounded-[10px] ">Get Started</button>
      </div>

      {/* Round stuff */}
      <div className="absolute left-0 top-[40px]">
        <svg
          width="163"
          height="342"
          viewBox="0 0 163 342"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.2"
            d="M-8 328.877C79.1933 328.877 149.877 258.193 149.877 171C149.877 83.8067 79.1933 13.1226 -8 13.1226C-95.1933 13.1226 -165.877 83.8067 -165.877 171C-165.877 258.193 -95.1933 328.877 -8 328.877Z"
            stroke="url(#paint0_linear_177_17)"
            stroke-width="25.7549"
          />
          <defs>
            <linearGradient
              id="paint0_linear_177_17"
              x1="-8"
              y1="26"
              x2="-8"
              y2="316"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#0789FF" />
              <stop offset="1" stop-color="#0477FE" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="right-0 bottom-0 absolute">
        <svg
          width="201"
          height="342"
          viewBox="0 0 201 342"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.2"
            d="M171 328.877C258.193 328.877 328.877 258.193 328.877 171C328.877 83.8067 258.193 13.1226 171 13.1226C83.8067 13.1226 13.1226 83.8067 13.1226 171C13.1226 258.193 83.8067 328.877 171 328.877Z"
            stroke="url(#paint0_linear_177_15)"
            stroke-width="25.7549"
          />
          <defs>
            <linearGradient
              id="paint0_linear_177_15"
              x1="171"
              y1="26"
              x2="171"
              y2="316"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#0789FF" />
              <stop offset="1" stop-color="#0477FE" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
};

export default Services;
