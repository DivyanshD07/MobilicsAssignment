import Image from "next/image";
import Hero from "@/components/Hero";
import Job from "@/components/Job";
import About from "@/components/About";

export default function Home() {
  return (
    <main className="flex flex-col justify-center align-middle items-center" >
      <Hero />
      <Job />
      <About />
    </main>
  );
}
