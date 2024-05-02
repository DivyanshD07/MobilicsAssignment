import React from "react";
import Image from "next/image";
import "./About.css";
import Link from "next/link";

const About = () => {
  return (
    <div className="relative flex flex-col align-middle items-center justify-center w-full h-[50vh]">
      <div className="absolute inset-0 z-0">
        <Image src="/images/About_bg.jpg" layout="fill" objectFit="cover" alt="japan" className="image-bg" />
      </div>
      <div className="overlay-content w-[100%] absolute inset-0 flex flex-col justify-center items-center align-middle opacity-0 transition-opacity duration-300 hover:opacity-100 z-10">
        <h1 className="text-4xl font-bold text-black">About Japan</h1>
        <p className="text-center text-lg text-semibold p-[4%]">Japan, also called the Land of the Rising Sun, is a mix of ancient traditions coexisting with global innovation. Made up of 4 main islands in East Asia, the nation has diverse climates and landscapes – snowy mountains dominate the northern end, while to the south, you’ll find Nagano’s lakes, Kyoto’s temples, and the vibrant capital of Tokyo. Thanks to an extensive rail network, you can ride one of the world’s fastest bullet trains from the subtropical beaches in the south to the northernmost mountain ranges.
      </p>
      <Link href="/about" className="px-3 py-1 bg-blue-400 hover:bg-blue-300 hover:text-white rounded-xl opacity-80">Learn More</Link>
      </div>
    </div>
  );
};

export default About;