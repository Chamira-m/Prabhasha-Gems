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
        className="relative bg-[#FFFFFF] p-4 sm:p-4 md:p-5 lg:p-6 xl:p-7 2xl:p-8 3xl:p-9 4xl:p-10  
                      w-[237px] h-[190px] 
                      xs:w-[257px] xs:h-[205px] 
                      sm:w-[270px] sm:h-[220px] 
                      md:w-[330px] md:h-[305px] 
                      lg:w-[380px] lg:h-[350px] 
                      xl:w-[370px] xl:h-[420px] 
                      2xl:w-[390px] 2xl:h-[425px]
                      3xl:w-[450px] 3xl:h-[500px]
                      4xl:w-[500px] 4xl:h-[550px]
                      shadow-xl"
      >
        <div className="flex flex-row items-start">
          <Image
            className="w-[12px] h-[12px] xs:w-[15px] xs:h-[15px] sm:w-[20px] sm:h-[20px] md:w-[25px] md:h-[25px] lg:w-[30px] lg:h-[30px] xl:w-[32px] xl:h-[32px] 2xl:w-[34px] 2xl:h-[34px] 3xl:w-[40px] 3xl:h-[40px] 4xl:w-[44px] 4xl:h-[44px] items-start"
            src={Coma}
            alt="ImageOne"
            width={500}
            height={300}
            layout="fixed"
            objectFit="cover"
            loading="lazy"
          />
        </div>
        <p className="text-blueGray font-mulish-lightItalic text-[7px] xs:text-[8px] sm:text-[10px] md:text-[12px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px] 3xl:text-[18px] 4xl:text-[20px] text-justify mt-4 xs:mt-5 sm:mt-5 md:mt-3 lg:mt-3 xl:mt-4">
          {comment}
        </p>
        <h1 className="xs:mt-2 md:mt-4 text-darkMint font-semibold text-[7px] xs:text-[8px] sm:text-[10px] md:text-[12px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px] 3xl:text-[18px] 4xl:text-[20px] text-center">
          {name}
        </h1>
        <h1 className=" xs:mt-2 md:mt-4 text-blueGray font-semibold text-[7px] xs:text-[8px] sm:text-[10px] md:text-[12px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px] 3xl:text-[18px] 4xl:text-[20px] text-center">
          {location}
        </h1>
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
          <Image
            className="w-[50px] h-[50px] xs:w-[69px] xs:h-[69px] sm:w-[75px] sm:h-[75px] md:w-[80px] md:h-[80px] lg:w-[100px] lg:h-[100px] xl:w-[132px] xl:h-[132px] 2xl:w-[132px] 2xl:h-[132px] 3xl:w-[150px] 3xl:h-[150px] 4xl:w-[160px] 4xl:h-[160px] rounded-full"
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
