import React from "react";
import Image from "next/image";

interface Props {
  src: string;
  alt: string;
  height: number;
  width: number;
}

function Face(props: Props) {
  const { src, alt, height, width } = props;

  return (
    <div className="mb-4 md:ml-12 lg:ml-12">
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="rounded-full aspect-square object-cover"
      />
    </div>
  );
}

export default Face;
