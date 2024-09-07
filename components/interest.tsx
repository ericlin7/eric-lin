import React from "react";

import type { activity } from "@/types/activity";

interface Props {
  items: activity[];
}

function Interest(props: Props) {
  const { items } = props;

  return (
    <div className="mt-4 mb-4">
      <p>Some of my hobbies include:</p>
      <div className="flex flex-wrap gap-2 mt-2">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-center p-3 bg-gray-100 rounded-lg shadow-md"
          >
            <span className="text-xl mr-2">{item?.emoji}</span>
            {item.description}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Interest;
