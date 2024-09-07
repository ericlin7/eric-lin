import React from "react";

interface Props {
  src: string;
  alt: string;
  height: string;
  width: string;
}

function Face(props: Props) {
  const { src, alt, height, width } = props;

  return (
    <div className="mb-4 md:ml-12 lg:ml-12">
      <img
        src={src}
        alt={alt}
        style={{ height, width }}
        className="rounded-full object-cover"
      />
    </div>
  );
}

export default Face;
