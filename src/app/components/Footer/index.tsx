import React from "react";
import Image from "next/image";
import Logo from "../../../public/images/home/logoWhite.png";

const Footer = () => {
  return (
    <>
      <div className="md:block hidden mt-5 bg-darkBlue lg:-mx-10 -mx-5">
        <div className="grid grid-cols-5 mx-5 lg:mx-10 md:pt-6 lg:pt-7 xl:pt-10 md:pb-7 lg:pb-8 xl:pb-12">
          <div className="flex flex-col">
            <h1 className="uppercase md:text-[10px] lg:text-[12px] xl:text-[16px] 2xl:text-[17px] 3xl:text-[20px] 4xl:text-[22px] font-mulish-bold text-[#FFFFFF] mb-3">
              Products
            </h1>
            <h1 className="uppercase md:text-[8px] lg:text-[9px] xl:text-[14px] 2xl:text-[15px] 3xl:text-[18px] 4xl:text-[20px] font-mulish-regular text-lightGray">
              Sapphire
            </h1>
            <h1 className="uppercase md:text-[8px] lg:text-[9px] xl:text-[14px] 2xl:text-[15px] 3xl:text-[18px] 4xl:text-[20px] font-mulish-regular text-lightGray">
              Jewellery
            </h1>
            <h1 className="uppercase md:text-[8px] lg:text-[9px] xl:text-[14px] 2xl:text-[15px] 3xl:text-[18px] 4xl:text-[20px] font-mulish-regular text-lightGray">
              Fine Jewellery
            </h1>
            <h1 className="uppercase md:text-[8px] lg:text-[9px] xl:text-[14px] 2xl:text-[15px] 3xl:text-[18px] 4xl:text-[20px] font-mulish-regular text-lightGray">
              Collections
            </h1>
            <h1 className="uppercase md:text-[8px] lg:text-[9px] xl:text-[14px] 2xl:text-[15px] 3xl:text-[18px] 4xl:text-[20px] font-mulish-regular text-lightGray">
              Gifts
            </h1>
          </div>
          <div className="flex flex-col">
            <h1 className="uppercase md:text-[10px] lg:text-[12px] xl:text-[16px] 2xl:text-[17px] 3xl:text-[20px] 4xl:text-[22px] font-mulish-bold text-[#FFFFFF] mb-3">
              Client Care
            </h1>
            <h1 className="uppercase md:text-[8px] lg:text-[9px] xl:text-[14px] 2xl:text-[15px] 3xl:text-[18px] 4xl:text-[20px] font-mulish-regular text-lightGray">
              Track your order
            </h1>
            <h1 className="uppercase md:text-[8px] lg:text-[9px] xl:text-[14px] 2xl:text-[15px] 3xl:text-[18px] 4xl:text-[20px] font-mulish-regular text-lightGray">
              Shipping and return
            </h1>
            <h1 className="uppercase md:text-[8px] lg:text-[9px] xl:text-[14px] 2xl:text-[15px] 3xl:text-[18px] 4xl:text-[20px] font-mulish-regular text-lightGray">
              Product care & Repair
            </h1>
            <h1 className="uppercase md:text-[8px] lg:text-[9px] xl:text-[14px] 2xl:text-[15px] 3xl:text-[18px] 4xl:text-[20px] font-mulish-regular text-lightGray">
              Request Gems
            </h1>
            <h1 className="uppercase md:text-[8px] lg:text-[9px] xl:text-[14px] 2xl:text-[15px] 3xl:text-[18px] 4xl:text-[20px] font-mulish-regular text-lightGray">
              Book an appointment
            </h1>
          </div>
          <div className="flex flex-col">
            <h1 className="uppercase md:text-[10px] lg:text-[12px] xl:text-[16px] 2xl:text-[17px] 3xl:text-[20px] 4xl:text-[22px] font-mulish-bold text-[#FFFFFF] mb-3">
              Our Company
            </h1>
            <h1 className="uppercase md:text-[8px] lg:text-[9px] xl:text-[14px] 2xl:text-[15px] 3xl:text-[18px] 4xl:text-[20px] font-mulish-regular text-lightGray">
              About Us
            </h1>
            <h1 className="uppercase md:text-[8px] lg:text-[9px] xl:text-[14px] 2xl:text-[15px] 3xl:text-[18px] 4xl:text-[20px] font-mulish-regular text-lightGray">
              Contact Us
            </h1>
            <h1 className="uppercase md:text-[8px] lg:text-[9px] xl:text-[14px] 2xl:text-[15px] 3xl:text-[18px] 4xl:text-[20px] font-mulish-regular text-lightGray">
              Location
            </h1>
            <h1 className="uppercase md:text-[8px] lg:text-[9px] xl:text-[14px] 2xl:text-[15px] 3xl:text-[18px] 4xl:text-[20px] font-mulish-regular text-lightGray">
              Privacy policy
            </h1>
            <h1 className="uppercase md:text-[8px] lg:text-[9px] xl:text-[14px] 2xl:text-[15px] 3xl:text-[18px] 4xl:text-[20px] font-mulish-regular text-lightGray">
              FAQ
            </h1>
          </div>
          <div className="col-span-2">
            <div className="flex justify-end">
              <Image
                src={Logo}
                alt="Logo"
                width={500}
                height={300}
                className="md:w-[180px] md:h-[100px] lg:w-[220px] lg:h-[130px] xl:w-[280px] xl:h-[140px] 2xl:w-[340px] 2xl:h-[190px] 3xl:w-[350px] 3xl:h-[200px] 4xl:w-[380px] 4xl:h-[220px]"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="block md:hidden bg-darkBlue -mx-5 pb-5">
        <div className="flex flex-col mx-5 pt-3 xs:pt-4 sm:pt-5 items-center">
          <Image
            src={Logo}
            alt="Logo"
            width={500}
            height={300}
            className="w-[130px] h-[80px] xs:w-[155px] xs:h-[90px] sm:w-[167px] sm:h-[98px] "
          />
        </div>
        <div className="grid grid-cols-3 mx-5">
          <div className="flex flex-col items-start">
            <h1 className="uppercase text-[8px] font-mulish-bold text-[#FFFFFF] mb-1">
              Products
            </h1>
            <div className="flex flex-col items-start">
              <h1 className="uppercase text-[6px] xs:text-[7px] sm:[8px] font-mulish-regular text-lightGray">
                Sapphire
              </h1>
              <h1 className="uppercase text-[6px] xs:text-[7px] sm:[8px] font-mulish-regular text-lightGray">
                Jewellery
              </h1>
              <h1 className="uppercase text-[6px] xs:text-[7px] sm:[8px] font-mulish-regular text-lightGray">
                Fine Jewellery
              </h1>
              <h1 className="uppercase text-[6px] xs:text-[7px] sm:[8px] font-mulish-regular text-lightGray">
                Collections
              </h1>
              <h1 className="uppercase text-[6px] xs:text-[7px] sm:[8px] font-mulish-regular text-lightGray">
                Gifts
              </h1>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <h1 className="uppercase text-[8px] font-mulish-bold text-[#FFFFFF] mb-1">
              Client Care
            </h1>
            <div className="flex flex-col items-center">
              <h1 className="uppercase text-[6px] xs:text-[7px] sm:[8px] font-mulish-regular text-lightGray">
                Track your order
              </h1>
              <h1 className="uppercase text-[6px] xs:text-[7px] sm:[8px] font-mulish-regular text-lightGray">
                Shipping and return
              </h1>
              <h1 className="uppercase text-[6px] xs:text-[7px] sm:[8px] font-mulish-regular text-lightGray">
                Product care & Repair
              </h1>
              <h1 className="uppercase text-[6px] xs:text-[7px] sm:[8px] font-mulish-regular text-lightGray">
                Request Gems
              </h1>
              <h1 className="uppercase text-[6px] xs:text-[7px] sm:[8px] font-mulish-regular text-lightGray">
                Book an appointment
              </h1>
            </div>
          </div>
          <div className="flex flex-col items-end">
            <h1 className="uppercase text-[8px] font-mulish-bold text-[#FFFFFF] mb-1">
              Our Company
            </h1>
            <div className="flex flex-col items-end">
              <h1 className="uppercase text-[6px] xs:text-[7px] sm:[8px] font-mulish-regular text-lightGray">
                About Us
              </h1>
              <h1 className="uppercase text-[6px] xs:text-[7px] sm:[8px] font-mulish-regular text-lightGray">
                Contact Us
              </h1>
              <h1 className="uppercase text-[6px] xs:text-[7px] sm:[8px] font-mulish-regular text-lightGray">
                Location
              </h1>
              <h1 className="uppercase text-[6px] xs:text-[7px] sm:[8px] font-mulish-regular text-lightGray">
                Privacy policy
              </h1>
              <h1 className="uppercase text-[6px] xs:text-[7px] sm:[8px] font-mulish-regular text-lightGray">
                FAQ
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="container py-2 xs:py-3 sm:py-3 mx-auto flex flex-col md:flex-row justify-between items-center font-mulish-semiBold text-darkBlue text-[8px] xs:text-[9px] sm:text-[10px] xl:text-[14px] 2xl:text-[15px] 3xl:text-[18px] 4xl:text-[20px]">
        <div className="text-center md:text-left">
          <p className="uppercase">
            &copy; {new Date().getFullYear()} prabhasha gems. All rights
            reserved.
          </p>
        </div>
        <div>
          <h1 className="uppercase text-blueGray text-[7px] xs:text-[8px] sm:text-[9px] xl:text-[14px] 2xl:text-[15px] 3xl:text-[18px] 4xl:text-[20px]">
            STRATEGIZE. Innovate. Dominate by{" "}
            <span className="text-darkMint font-mulish-extraBold">
              Torenshal
            </span>
          </h1>
        </div>
      </div>
    </>
  );
};

export default Footer;
