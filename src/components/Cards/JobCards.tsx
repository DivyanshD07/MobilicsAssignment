import React from "react";
import "./JobCards.css";
import Image from "next/image";

const JobCard = (props: { CompanyLogo: string, CompanyName: string, JobTitle: string, JobType: string, JobLocation: string, Salary: string }) => {
    return (
        <div className="w-full flex flex-col justify-start align-middle items-start bg-white border-2 border-gray-950 Jobcard z-10">
            <Image src={props.CompanyLogo} width={100} height={100} alt="companylogo" className="mb-3" />
            <div className="text-2xl font-bold">Company: {props.CompanyName}</div>
            <div className="text-lg font-semibold">Position: {props.JobTitle}</div>
            <div className="text-lg font-semibold">Location: {props.JobLocation}</div>
            <div className="text-lg font-semibold">Salary: {props.Salary}</div>
        </div>
    );
};

export default JobCard;