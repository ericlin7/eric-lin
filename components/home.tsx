import React from "react";

import Experience from "@/components/experience";
import Face from "@/components/face";
import Header from "@/components/header";
import Interest from "@/components/interest";
import LocationPin from "@/components/icons/location";

import { internship } from "@/data/internship";
import { interest } from "@/data/interest";

function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <div className="text-sm sm:text-base md:text-md lg:text-lg text-gray-600 w-full max-w-3xl px-2 sm:px-4">
        <div className="flex flex-col-reverse items-center sm:flex-row sm:items-start mt-8 sm:mt-12">
          <div className="text-center sm:text-left mb-4 sm:mb-0 sm:mr-8">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800">
              Hi, I&apos;m Eric
            </h1>
            <div className="flex items-center justify-center sm:justify-start mt-2">
              <LocationPin
                width="28"
                height="28"
                color="white"
                strokeColor="gray"
              />
              <p className="ml-2">Vancouver, BC, Canada</p>
            </div>
            <Header className="mt-4" />
          </div>
          <div className="flex justify-center w-full sm:w-auto">
            <Face src="./eric.png" alt="EL" height={175} width={175} />
          </div>
        </div>
        <p className="mt-2 sm:mt-4 text-left leading-relaxed">
          I&apos;m a Senior Data Science student at the University of Waterloo.
          I like learning about Machine Learning and Data Science related
          topics. I also enjoy building stuff and learning new tech skills.
        </p>
        <Experience items={internship} />
        <p className="mt-2 sm:mt-4 text-left text-xs sm:text-sm md:text-base lg:text-lg">
          I am currently looking for{" "}
          <span className="font-semibold">2025 New Grad</span> opportunities or{" "}
          <span className="font-semibold">SWE Internships</span>!
        </p>
        <Interest items={interest} />
      </div>
    </div>
  );
}

export default Home;
