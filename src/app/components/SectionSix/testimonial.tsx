import React from "react";
import { TestimonialTypes } from "../types/testimonialTypes";
import Image from "next/image";

const Testimonial = ({
  testimonialTypes,
}: {
  testimonialTypes: TestimonialTypes;
}) => {
  const { comment, name, location, image } = testimonialTypes;
  return (
    <div className="bg-white xslocation:p-2 md:p-2 lg:p-3">
      <p className="text-blueGray font-mulish-lightItalic xs:text-[8px] sm:text-[10px] md:text-[12px] lg:text-[14px] xl:text-[16px] text-justify">
        {comment}
      </p>
      <h1 className="xs:mt-2 md:mt-4 text-darkMint font-semibold xs:text-[8px] sm:text-[10px] md:text-[12px] lg:text-[14px] xl:text-[16px] text-center">
        {name}
      </h1>
      <h1 className=" xs:mt-2 md:mt-4 text-blueGray font-semibold xs:text-[8px] sm:text-[10px] md:text-[12px] lg:text-[14px] xl:text-[16px] text-center">
        {location}
      </h1>
      <Image
        className="xs:w-[50px] xs:h-[50px] sm:w-[90px] sm:h-[90px] md:w-[80px] md:h-[80px] lg:w-[100px] lg:h-[100px] xl:w-[132px] xl:h-[132px] mt-10 rounded-full"
        src={image}
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

export default Testimonial;
