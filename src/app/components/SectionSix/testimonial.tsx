import React from "react";
import { TestimonialTypes } from "../types/testimonialTypes";
import Image from "next/image";
import Coma from "../../../public/images/home/coma.png";

const Testimonial = ({
  testimonialTypes,
}: {
  testimonialTypes: TestimonialTypes;
}) => {
  const { comment, name, location, image } = testimonialTypes;
  return (
    <div className="flex flex-col justify-center items-center pb-12 sm:pb-16 md:pb-20 lg:pb-24 xl:pb-28">
      <div
        className="relative bg-[#FFFFFF] p-4 sm:p-5 md:p-6 lg:p-7 xl:p-8  
                      w-[257px] h-[205px] 
                      sm:w-[257px] sm:h-[205px] 
                      md:w-[340px] md:h-[305px] 
                      lg:w-[380px] lg:h-[350px] 
                      xl:w-[395px] xl:h-[430px] shadow-xl"
      >
        <div className="flex flex-row items-start">
          <Image
            className="xs:w-[15px] xs:h-[15px] sm:w-[20px] sm:h-[20px] md:w-[25px] md:h-[25px] lg:w-[30px] lg:h-[30px] xl:w-[35px] xl:h-[35px] items-start"
            src={Coma}
            alt="ImageOne"
            width={500}
            height={300}
            layout="fixed"
            objectFit="cover"
            loading="lazy"
          />
        </div>
        <p className="text-blueGray font-mulish-lightItalic xs:text-[8px] sm:text-[10px] md:text-[12px] lg:text-[14px] xl:text-[16px] text-justify xs:mt-5 sm:mt-5 md:mt-3 lg:mt-3 xl:mt-4">
          {comment}
        </p>
        <h1 className="xs:mt-2 md:mt-4 text-darkMint font-semibold xs:text-[8px] sm:text-[10px] md:text-[12px] lg:text-[14px] xl:text-[16px] text-center">
          {name}
        </h1>
        <h1 className=" xs:mt-2 md:mt-4 text-blueGray font-semibold xs:text-[8px] sm:text-[10px] md:text-[12px] lg:text-[14px] xl:text-[16px] text-center">
          {location}
        </h1>
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
          <Image
            className="xs:w-[69px] xs:h-[69px] sm:w-[90px] sm:h-[90px] md:w-[80px] md:h-[80px] lg:w-[100px] lg:h-[100px] xl:w-[132px] xl:h-[132px] rounded-full"
            src={image}
            alt="ImageOne"
            width={500}
            height={300}
            layout="fixed"
            objectFit="cover"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
