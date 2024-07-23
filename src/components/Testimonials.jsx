"use client";
import Image from "next/image";
import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Testimonials() {
  const settings = {
    dots: true,
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "100px",
    slidesToShow: 2.8,
    // slidesToScroll: 1,
    speed: 500,
  };

  return (
    <div className="slider-container mt-8  w-[100%] h-[450px] overflow-hidden">
      <Slider {...settings}>
       

        <div className="bg-white center rounded-[10px] h-[450px]  p-[30px]">
          <div className=" flex justify-between">
            <div className="flex gap-[16px]">
              <Image src="/Image.svg" alt="" width={80} height={80} />
              <div className="flex flex-col">
                <h1 className="text-[20px] font-poppins font-[700] text-[#0477FE] ">
                  John S., London
                </h1>

                <div className="mt-[15px]">
                  <svg
                    width="110"
                    height="20"
                    viewBox="0 0 110 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_177_120)">
                      <path
                        d="M9.49275 1.6416L11.8952 6.78374L17.2677 7.61339L13.3802 11.6137L14.2977 17.2652L9.49275 14.5955L4.68781 17.2652L5.60526 11.6137L1.71777 7.61339L7.09028 6.78374L9.49275 1.6416Z"
                        fill="#FF7F00"
                        stroke="#FF7F00"
                        stroke-width="1.64286"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </g>
                    <g clip-path="url(#clip1_177_120)">
                      <path
                        d="M54.5875 1.6416L56.9899 6.78374L62.3624 7.61339L58.475 11.6137L59.3924 17.2652L54.5875 14.5955L49.7825 17.2652L50.7 11.6137L46.8125 7.61339L52.185 6.78374L54.5875 1.6416Z"
                        fill="#FF7F00"
                        stroke="#FF7F00"
                        stroke-width="1.64286"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </g>
                    <path
                      d="M32.0406 1.6416L34.4431 6.78374L39.8156 7.61339L35.9281 11.6137L36.8455 17.2652L32.0406 14.5955L27.2357 17.2652L28.1531 11.6137L24.2656 7.61339L29.6381 6.78374L32.0406 1.6416Z"
                      fill="#FF7F00"
                      stroke="#FF7F00"
                      stroke-width="1.64286"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M77.1353 1.6416L79.5378 6.78374L84.9103 7.61339L81.0228 11.6137L81.9403 17.2652L77.1353 14.5955L72.3304 17.2652L73.2478 11.6137L69.3604 7.61339L74.7329 6.78374L77.1353 1.6416Z"
                      fill="#FF7F00"
                      stroke="#FF7F00"
                      stroke-width="1.64286"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M99.6822 1.6416L102.085 6.78374L107.457 7.61339L103.57 11.6137L104.487 17.2652L99.6822 14.5955L94.8773 17.2652L95.7947 11.6137L91.9072 7.61339L97.2797 6.78374L99.6822 1.6416Z"
                      fill="#FF7F00"
                      stroke="#FF7F00"
                      stroke-width="1.64286"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <defs>
                      <clipPath id="clip0_177_120">
                        <rect
                          width="18.6599"
                          height="19.7143"
                          fill="white"
                          transform="translate(0.163086)"
                        />
                      </clipPath>
                      <clipPath id="clip1_177_120">
                        <rect
                          width="18.6599"
                          height="19.7143"
                          fill="white"
                          transform="translate(45.2578)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>

            <div className="whitespace-nowrap">2 March, 2024 </div>
          </div>

          <p className="mt-4 text-[20px] font-[400] font-poppins">
            Askus Anytime provided excellent legal assistance for my employment
            issue. They were responsive, knowledgeable about my query on legal
            support on employment law. Their professionalism and clear
            communication made a significant difference in resolving my query
            effectively.
          </p>
        </div>

        <div className="bg-white  rounded-[10px] h-[450px] p-[30px]">
          <div className=" flex justify-between">
            <div className="flex gap-[16px]">
              <Image src="/Image.svg" alt="" width={80} height={80} />
              <div className="flex flex-col">
                <h1 className="text-[20px] font-poppins font-[700] text-[#0477FE] ">
                Emily T., Birmingham
                </h1>

                <div className="mt-[15px]">
                  <svg
                    width="110"
                    height="20"
                    viewBox="0 0 110 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_177_120)">
                      <path
                        d="M9.49275 1.6416L11.8952 6.78374L17.2677 7.61339L13.3802 11.6137L14.2977 17.2652L9.49275 14.5955L4.68781 17.2652L5.60526 11.6137L1.71777 7.61339L7.09028 6.78374L9.49275 1.6416Z"
                        fill="#FF7F00"
                        stroke="#FF7F00"
                        stroke-width="1.64286"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </g>
                    <g clip-path="url(#clip1_177_120)">
                      <path
                        d="M54.5875 1.6416L56.9899 6.78374L62.3624 7.61339L58.475 11.6137L59.3924 17.2652L54.5875 14.5955L49.7825 17.2652L50.7 11.6137L46.8125 7.61339L52.185 6.78374L54.5875 1.6416Z"
                        fill="#FF7F00"
                        stroke="#FF7F00"
                        stroke-width="1.64286"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </g>
                    <path
                      d="M32.0406 1.6416L34.4431 6.78374L39.8156 7.61339L35.9281 11.6137L36.8455 17.2652L32.0406 14.5955L27.2357 17.2652L28.1531 11.6137L24.2656 7.61339L29.6381 6.78374L32.0406 1.6416Z"
                      fill="#FF7F00"
                      stroke="#FF7F00"
                      stroke-width="1.64286"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M77.1353 1.6416L79.5378 6.78374L84.9103 7.61339L81.0228 11.6137L81.9403 17.2652L77.1353 14.5955L72.3304 17.2652L73.2478 11.6137L69.3604 7.61339L74.7329 6.78374L77.1353 1.6416Z"
                      fill="#FF7F00"
                      stroke="#FF7F00"
                      stroke-width="1.64286"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M99.6822 1.6416L102.085 6.78374L107.457 7.61339L103.57 11.6137L104.487 17.2652L99.6822 14.5955L94.8773 17.2652L95.7947 11.6137L91.9072 7.61339L97.2797 6.78374L99.6822 1.6416Z"
                      fill="#FF7F00"
                      stroke="#FF7F00"
                      stroke-width="1.64286"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <defs>
                      <clipPath id="clip0_177_120">
                        <rect
                          width="18.6599"
                          height="19.7143"
                          fill="white"
                          transform="translate(0.163086)"
                        />
                      </clipPath>
                      <clipPath id="clip1_177_120">
                        <rect
                          width="18.6599"
                          height="19.7143"
                          fill="white"
                          transform="translate(45.2578)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>

            <div className="whitespace-nowrap">2 March, 2024 </div>
          </div>

          <p className="mt-4 text-[20px] font-[400] font-poppins">
          After spending a substantial amount on consultations with lawyers without finding a satisfactory solution on a business dispute, a friend recommended Askus Anytime. One of the experts there responded to my query within seconds and provided me with the legal guidance that ultimately helped me. Thanks, Askus Anytime!
          </p>
        </div>

        <div className="bg-white  rounded-[10px] h-[450px] p-[30px]">
          <div className=" flex justify-between">
            <div className="flex gap-[16px]">
              <Image src="/Image.svg" alt="" width={80} height={80} />
              <div className="flex flex-col">
                <h1 className="text-[20px] font-poppins font-[700] text-[#0477FE] ">
                Ahmed K., Manchester
                </h1>

                <div className="mt-[15px]">
                  <svg
                    width="110"
                    height="20"
                    viewBox="0 0 110 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_177_120)">
                      <path
                        d="M9.49275 1.6416L11.8952 6.78374L17.2677 7.61339L13.3802 11.6137L14.2977 17.2652L9.49275 14.5955L4.68781 17.2652L5.60526 11.6137L1.71777 7.61339L7.09028 6.78374L9.49275 1.6416Z"
                        fill="#FF7F00"
                        stroke="#FF7F00"
                        stroke-width="1.64286"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </g>
                    <g clip-path="url(#clip1_177_120)">
                      <path
                        d="M54.5875 1.6416L56.9899 6.78374L62.3624 7.61339L58.475 11.6137L59.3924 17.2652L54.5875 14.5955L49.7825 17.2652L50.7 11.6137L46.8125 7.61339L52.185 6.78374L54.5875 1.6416Z"
                        fill="#FF7F00"
                        stroke="#FF7F00"
                        stroke-width="1.64286"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </g>
                    <path
                      d="M32.0406 1.6416L34.4431 6.78374L39.8156 7.61339L35.9281 11.6137L36.8455 17.2652L32.0406 14.5955L27.2357 17.2652L28.1531 11.6137L24.2656 7.61339L29.6381 6.78374L32.0406 1.6416Z"
                      fill="#FF7F00"
                      stroke="#FF7F00"
                      stroke-width="1.64286"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M77.1353 1.6416L79.5378 6.78374L84.9103 7.61339L81.0228 11.6137L81.9403 17.2652L77.1353 14.5955L72.3304 17.2652L73.2478 11.6137L69.3604 7.61339L74.7329 6.78374L77.1353 1.6416Z"
                      fill="#FF7F00"
                      stroke="#FF7F00"
                      stroke-width="1.64286"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M99.6822 1.6416L102.085 6.78374L107.457 7.61339L103.57 11.6137L104.487 17.2652L99.6822 14.5955L94.8773 17.2652L95.7947 11.6137L91.9072 7.61339L97.2797 6.78374L99.6822 1.6416Z"
                      fill="#FF7F00"
                      stroke="#FF7F00"
                      stroke-width="1.64286"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <defs>
                      <clipPath id="clip0_177_120">
                        <rect
                          width="18.6599"
                          height="19.7143"
                          fill="white"
                          transform="translate(0.163086)"
                        />
                      </clipPath>
                      <clipPath id="clip1_177_120">
                        <rect
                          width="18.6599"
                          height="19.7143"
                          fill="white"
                          transform="translate(45.2578)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>

            <div className="whitespace-nowrap">2 March, 2024 </div>
          </div>

          <p className="mt-4 text-[20px] font-[400] font-poppins">
          UK immigration lawyers of Askus Anytime were instrumental in helping me secure my visa. They guided me through the entire process and made it seamless. Thank you!
          </p>
        </div>
        <div className="bg-white  rounded-[10px] h-[450px] p-[30px]">
          <div className=" flex justify-between">
            <div className="flex gap-[16px]">
              <Image src="/Image.svg" alt="" width={80} height={80} />
              <div className="flex flex-col">
                <h1 className="text-[20px] font-poppins font-[700] text-[#0477FE] ">
                Ahmed K., Manchester
                </h1>

                <div className="mt-[15px]">
                  <svg
                    width="110"
                    height="20"
                    viewBox="0 0 110 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_177_120)">
                      <path
                        d="M9.49275 1.6416L11.8952 6.78374L17.2677 7.61339L13.3802 11.6137L14.2977 17.2652L9.49275 14.5955L4.68781 17.2652L5.60526 11.6137L1.71777 7.61339L7.09028 6.78374L9.49275 1.6416Z"
                        fill="#FF7F00"
                        stroke="#FF7F00"
                        stroke-width="1.64286"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </g>
                    <g clip-path="url(#clip1_177_120)">
                      <path
                        d="M54.5875 1.6416L56.9899 6.78374L62.3624 7.61339L58.475 11.6137L59.3924 17.2652L54.5875 14.5955L49.7825 17.2652L50.7 11.6137L46.8125 7.61339L52.185 6.78374L54.5875 1.6416Z"
                        fill="#FF7F00"
                        stroke="#FF7F00"
                        stroke-width="1.64286"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </g>
                    <path
                      d="M32.0406 1.6416L34.4431 6.78374L39.8156 7.61339L35.9281 11.6137L36.8455 17.2652L32.0406 14.5955L27.2357 17.2652L28.1531 11.6137L24.2656 7.61339L29.6381 6.78374L32.0406 1.6416Z"
                      fill="#FF7F00"
                      stroke="#FF7F00"
                      stroke-width="1.64286"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M77.1353 1.6416L79.5378 6.78374L84.9103 7.61339L81.0228 11.6137L81.9403 17.2652L77.1353 14.5955L72.3304 17.2652L73.2478 11.6137L69.3604 7.61339L74.7329 6.78374L77.1353 1.6416Z"
                      fill="#FF7F00"
                      stroke="#FF7F00"
                      stroke-width="1.64286"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M99.6822 1.6416L102.085 6.78374L107.457 7.61339L103.57 11.6137L104.487 17.2652L99.6822 14.5955L94.8773 17.2652L95.7947 11.6137L91.9072 7.61339L97.2797 6.78374L99.6822 1.6416Z"
                      fill="#FF7F00"
                      stroke="#FF7F00"
                      stroke-width="1.64286"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <defs>
                      <clipPath id="clip0_177_120">
                        <rect
                          width="18.6599"
                          height="19.7143"
                          fill="white"
                          transform="translate(0.163086)"
                        />
                      </clipPath>
                      <clipPath id="clip1_177_120">
                        <rect
                          width="18.6599"
                          height="19.7143"
                          fill="white"
                          transform="translate(45.2578)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>

            <div className="whitespace-nowrap">2 March, 2024 </div>
          </div>

          <p className="mt-4 text-[20px] font-[400] font-poppins">
          Askus Anytime provided excellent legal assistance for divorce. They expertly navigated custody issues with empathy, providing crucial support during a challenging time. Their dedication to ensuring the well-being of my family was evident throughout the process, and I highly recommend their legal service for divorce.
          </p>
        </div>
        
      </Slider>
    </div>
  );
}

export default Testimonials;
