import React from "react";
import Image from "next/image";
import maintain from "../../public/images/home/maintain.png";
const ruby = () => {
  return (
    <div className="xs:mt-28 md:mt-60 w-full h-full flex flex-row justify-center">
      {" "}
      <Image
        className="xs:w-full xs:h-full xl:w-[500px] xl:h-[400px]"
        src={maintain}
        alt="ImageOne"
        width={500}
        height={300}
        layout="fixed"
        objectFit="cover"
        loading="lazy"
      />
    </div>
  );
};

export default ruby;
