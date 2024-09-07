import React from "react";
import Image from "next/image";

import CalendarIcon from "@/components/icons/calendaricon";
import LocationPin from "@/components/icons/location";
import RightArrow from "@/components/icons/rightarrow";

import type { company } from "@/types/company";

interface Props {
  items: company[];
}

function Experience(props: Props) {
  const { items } = props;

  return (
    <>
      <h2 className="mt-4 text-xl font-bold mb-4">Experience</h2>
      <ul className="space-y-6">
        {items.map((item, index) => (
          <li
            key={index}
            className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-4"
          >
            <div className="flex flex-row items-start justify-between sm:justify-start p-4 rounded-lg">
              {item.logo && (
                <Image
                  src={item.logo}
                  alt={`${item.name} logo`}
                  width={56}
                  height={56}
                  className="object-cover mr-4"
                />
              )}
              <div className="flex-grow">
                <a
                  className="flex items-center font-semibold hover:underline"
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {`${item.role} @ ${item.name}`}
                  <RightArrow
                    width="28"
                    height="20"
                    color="gray"
                    strokeColor="gray"
                    className="ml-1"
                  />
                </a>

                <p className="text-gray-700 mt-2 text-xs sm:text-base">
                  {item.description}
                </p>

                <div className="mt-2 flex items-center">
                  <CalendarIcon
                    width="28"
                    height="30"
                    color="white"
                    strokeColor="gray"
                  />
                  <p className="text-gray-700 ml-1 text-xs sm:text-base">
                    {item.date}
                  </p>
                </div>
                <div className="mt-2 flex items-center">
                  <LocationPin
                    width="28"
                    height="28"
                    color="white"
                    strokeColor="gray"
                  />
                  <p className="text-gray-700 ml-1 text-xs sm:text-base">
                    {item.location}
                  </p>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Experience;
