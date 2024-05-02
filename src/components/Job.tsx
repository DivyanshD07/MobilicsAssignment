"use client";

import Card from "./Cards/JobCards";
import React, { useState } from "react";
import "./JobSection.css";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight, FaArrowCircleRight } from "react-icons/fa";
import Link from "next/link";

const Job = () => {

  const jobsData = [
    {
      CompanyLogo: "/images/google.png",
      CompanyName: "Google",
      JobTitle: "Software Engineer",
      JobType: "Full-Time",
      JobLocation: "Mountain View, CA",
      JobSalary: "100000"
    },
    {
      CompanyLogo: "/images/google.png",
      CompanyName: "Google",
      JobTitle: "Software Engineer",
      JobType: "Full-Time",
      JobLocation: "Mountain View, CA",
      JobSalary: "100000"
    },
    {
      CompanyLogo: "/images/google.png",
      CompanyName: "Google",
      JobTitle: "Software Engineer",
      JobType: "Full-Time",
      JobLocation: "Mountain View, CA",
      JobSalary: "100000"
    },
    {
      CompanyLogo: "/images/google.png",
      CompanyName: "Google",
      JobTitle: "Software Engineer",
      JobType: "Full-Time",
      JobLocation: "Mountain View, CA",
      JobSalary: "100000"
    },
    {
      CompanyLogo: "/images/google.png",
      CompanyName: "Google",
      JobTitle: "Software Engineer",
      JobType: "Full-Time",
      JobLocation: "Mountain View, CA",
      JobSalary: "100000"
    }
  ]

  return (
    <div className="h-[100%] w-[100%] flex flex-col pt-5 justify-around align-middle items-center gap-8 pb-6 job-section-container">
      <div className="right-spherical"></div>
      <div className="text-[2.5rem] font-bold">Jobs</div>
      <div className="flex flex-row justify-around items-center gap-8">
        <div className="job-section w-[90vw] flex flex-row-reverse justify-start items-start">
          {jobsData.map((job) => (
            <Card
              CompanyLogo={job.CompanyLogo}
              CompanyName={job.CompanyName}
              JobTitle={job.JobTitle}
              JobType={job.JobType}
              JobLocation={job.JobLocation}
              Salary={job.JobSalary} />
          ))}
        </div>
        <div className="h-full w-[5%]">
          <Link href={"/job"} className="z-10"><FaArrowAltCircleRight className="arrow-icon h-1/2 w-full z-11" /></Link>
        </div>
      </div>
    </div>
  );
};

export default Job;