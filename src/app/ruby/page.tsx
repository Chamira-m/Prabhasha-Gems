import React from "react";
import Image from "next/image";
import Maintain from "../../public/images/maintain.png";
const ruby = () => {
  return (
    <div className="flex flex-row justify-center xs:mt-28 xl:mt-60">
      {" "}
      <Image
        className="xs:w-full xs:h-full md:w-[250px] md:h-[250px] lg:w-[300px] lg:h-[300px] xl:w-[400px] xl:h-[400px]"
        src={Maintain}
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
