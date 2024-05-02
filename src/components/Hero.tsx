"use client";
import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { FaSearch } from "react-icons/fa";

const Hero = () => {
  const [text, setText] = useState("");
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    const textArray = ["Ready to work in Japan?", "Looking for a job in Japan?"];
    let count = 0;
    let index = 0;
    let currentText = "";
    let letter = "";

    const type = () => {
      if (count === textArray.length) {
        clearInterval(animationRef.current!);
        count = 0;
      }
      currentText = textArray[count];
      letter = currentText.slice(0, ++index);
      setText(letter);
      if (letter.length === currentText.length) {
        count++;
        index = 0;
      }
    };

    const typingInterval = setInterval(type, 150) as unknown as number;

    return () => clearInterval(animationRef.current!);
  }, []);

  return (
    <main className="flex flex-row justify-center align-middle items-center w-full h-[80vh] relative" >
      <div className="absolute inset-0 z-0">
        <Image src="/images/Hero_bg.jpg" layout="fill" objectFit="cover" alt="japan" className="image-bg" />
      </div>
      <div className="flex flex-col justify-center align-middle items-center z-10 left-side w-1/2 h-full text-black font-extrabold">
        <h1 className="text-5xl mb-2 p-4">{text}</h1>
        <div className="text-2xl mb-4">Find your dream job here!</div>
        <div className="flex flex-row justify-center text-center align-middle gap-2 px-8 py-1.5 bg-transparent rounded-lg">
          <button><FaSearch className="h-10 w-6" /></button>
          <input type="text" className=" bg-transparent text-blue-200 placeholder-blue-200 rounded-lg outline-none hover:border-1 focus:outline-1 focus:border-1" placeholder="Search for a job..." />
        </div>
      </div>
      <div className="flex flex-col justify-center align-middle items-center right-side w-1/2 h-full">

      </div>
    </main>
  );
};

export default Hero;