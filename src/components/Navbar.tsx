import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="sticky flex flex-row justify-between items-center w-full h-10vw bg-black text-white py-6 px-2 border-b-2 border-gray-500 align-middle">
      <div className="ml-12 font-bold text-3xl">FindWork</div>
      <div className="flex flex-row text-[1.2rem] font-semibold justify-center gap-10 text-center align-middle items-center w-2/4 h-full">
        <a href="/" className="hover:border-b-2 hover:px-2 hover:border-white hover:rounded-xl">Home</a>
        <a href="/job" className="hover:border-b-2 hover:px-2 hover:border-white hover:rounded-xl">Job</a>
        <a href="/about" className="hover:border-b-2 hover:px-2 hover:border-white hover:rounded-xl">About</a>
      </div>
      <div className="flex flex-row justify-between mr-8 gap-6">
        <div className="bg-gray-800 hover:bg-gray-700 flex items-center border-0 rounded-xl px-3 py-2">
          <div className="mr-2">
            <img src="/images/login.png" width={20} height={20} alt="login" />
          </div>
          <Link href="/login">Login</Link>
        </div>
        <div className="bg-gray-800 hover:bg-gray-700 flex items-center border-0 rounded-xl px-3 py-2">
          <div className="mr-2">
            <img src="/images/user.png" width={20} height={20} alt="signup" />
          </div>
          <Link href="/signup">SignUp</Link>
        </div>
      </div>
    </nav>


  );
};

export default Navbar;