import React from "react";
import { FaFacebookF, FaGoogle, FaInstagram, FaLinkedin } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="flex justify-between align-middle items-center bg-gray-900 text-white p-4">
      <div className="left-part flex flex-col">
        <h1 className="text-4xl font-bold">FindWork</h1>
        <div>Copyright &copy; 2024 FindWork</div>
      </div>
      <div className="right-part flex flex-row justify-center align-middle text-center gap-4">
        <div>Connect with us:</div>
        <div>
          <Link href="/"><FaFacebookF /></Link>
        </div>
        <div>
          <Link href="/"><FaLinkedin /></Link>
        </div>
        <div>
          <Link href="/"><FaInstagram /></Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;