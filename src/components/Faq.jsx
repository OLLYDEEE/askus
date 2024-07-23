'use client'
import Image from 'next/image';
import React, { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';

const faqData = [
  {
    question: 'How can I access legal support online through Askus Anytime?',
    answer: 'Visit our website to sign up today and start chatting with your experienced lawyers regarding your concerns.',
  },
  {
    question: 'What types of legal guidance does Askus Anytime specialise in?',
    answer: 'Tailwind CSS is a utility-first CSS framework for rapidly building custom designs.',
  },
  {
    question: 'Are your legal assistance services affordable?',
    answer: 'useState is a Hook that lets you add React state to function components.',
  },
  {
    question: 'How can a property dispute lawyer help resolve my issues?',
    answer: 'useState is a Hook that lets you add React state to function components.',
  },
  {
    question: 'What services does a British immigration lawyer offer?',
    answer: 'useState is a Hook that lets you add React state to function components.',
  },
  {
    question: 'I am looking for legal advice for business owners. Do you provide?',
    answer: 'useState is a Hook that lets you add React state to function components.',
  },
  {
    question: 'How can I establish child contact arrangements after separation?',
    answer: 'useState is a Hook that lets you add React state to function components.',
  },
  {
    question: 'What rights do employees have under UK employment law?',
    answer: 'useState is a Hook that lets you add React state to function components.',
  },
];

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFaq = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <div className="my-[70px]">
<h2 className="text-3xl font-bold text-center mb-10">Frequently Asked Questions</h2>
  
    <div className="flex justify-center items-center px-[100px] gap-10">
        <div className="max-w-[800px] w-full p-5">
      
      <div className="space-y-4">
        {faqData.map((item, index) => (
          <div key={index} className="border-b border-[#0023FF]/50 ">
            <div
              className="_bg-gray-100 p-4 cursor-pointer flex justify-between items-center"
              onClick={() => toggleFaq(index)}
            >
              <h3 className="text-[20px] font-poppins text-[#161616] font-[500]">{item.question}</h3>
              {activeIndex === index ? (
                <FaMinus className="text-[#161616]" />
              ) : (
                <FaPlus className="text-[#161616]" />
              )}
            </div>
            {activeIndex === index && (
              <div className="p-4 text-[16px] font-[400] font-poppins">
                <p>{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>

    <div className="">
        <Image src='/man.svg' alt='' width={544} height='805'/>
    </div>
    </div>

    </div>
  );
};

export default Faq;
