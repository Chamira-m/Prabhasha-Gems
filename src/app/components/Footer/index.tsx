import React from "react";
import Image from "next/image";
import Logo from "../../../public/images/home/logoWhite.png";

const Footer = () => {
  return (
    <>
      <div className="md:block hidden mt-5 bg-darkBlue lg:-mx-10 -mx-5">
        <div className="grid grid-cols-5 mx-5 lg:mx-10 md:pt-6 lg:pt-7 xl:pt-10 md:pb-7 lg:pb-8 xl:pb-12">
          <div className="flex flex-col">
            <h1 className="uppercase md:text-[10px] lg:text-[12px] xl:text-[18px] font-mulish-bold text-[#FFFFFF] mb-3">
              Products
            </h1>
            <h1 className="uppercase md:text-[8px] lg:text-[9px] xl:text-[15px] font-mulish-regular text-lightGray">
              Sapphire
            </h1>
            <h1 className="uppercase md:text-[8px] lg:text-[9px] xl:text-[15px] font-mulish-regular text-lightGray">
              Jewellery
            </h1>
            <h1 className="uppercase md:text-[8px] lg:text-[9px] xl:text-[15px] font-mulish-regular text-lightGray">
              Fine Jewellery
            </h1>
            <h1 className="uppercase md:text-[8px] lg:text-[9px] xl:text-[15px] font-mulish-regular text-lightGray">
              Collections
            </h1>
            <h1 className="uppercase md:text-[8px] lg:text-[9px] xl:text-[15px] font-mulish-regular text-lightGray">
              Gifts
            </h1>
          </div>
          <div className="flex flex-col">
            <h1 className="uppercase md:text-[10px] lg:text-[12px] xl:text-[18px] font-mulish-bold text-[#FFFFFF] mb-3">
              Client Care
            </h1>
            <h1 className="uppercase md:text-[8px] lg:text-[9px] xl:text-[15px] font-mulish-regular text-lightGray">
              Track your order
            </h1>
            <h1 className="uppercase md:text-[8px] lg:text-[9px] xl:text-[15px] font-mulish-regular text-lightGray">
              Shipping and return
            </h1>
            <h1 className="uppercase md:text-[8px] lg:text-[9px] xl:text-[15px] font-mulish-regular text-lightGray">
              Product care & Repair
            </h1>
            <h1 className="uppercase md:text-[8px] lg:text-[9px] xl:text-[15px] font-mulish-regular text-lightGray">
              Request Gems
            </h1>
            <h1 className="uppercase md:text-[8px] lg:text-[9px] xl:text-[15px] font-mulish-regular text-lightGray">
              Book an appointment
            </h1>
          </div>
          <div className="flex flex-col">
            <h1 className="uppercase md:text-[10px] lg:text-[12px] xl:text-[18px] font-mulish-bold text-[#FFFFFF] mb-3">
              Our Company
            </h1>
            <h1 className="uppercase md:text-[8px] lg:text-[9px] xl:text-[15px] font-mulish-regular text-lightGray">
              About Us
            </h1>
            <h1 className="uppercase md:text-[8px] lg:text-[9px] xl:text-[15px] font-mulish-regular text-lightGray">
              Contact Us
            </h1>
            <h1 className="uppercase md:text-[8px] lg:text-[9px] xl:text-[15px] font-mulish-regular text-lightGray">
              Location
            </h1>
            <h1 className="uppercase md:text-[8px] lg:text-[9px] xl:text-[15px] font-mulish-regular text-lightGray">
              Privacy policy
            </h1>
            <h1 className="uppercase md:text-[8px] lg:text-[9px] xl:text-[15px] font-mulish-regular text-lightGray">
              Frequently asked questions
            </h1>
          </div>
          <div className="col-span-2">
            <div className="flex justify-end">
              <Image
                src={Logo}
                alt="Logo"
                width={500}
                height={300}
                className="md:w-[180px] md:h-[100px] lg:w-[220px] lg:h-[130px] xl:w-[357px] xl:h-[210px]"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="block md:hidden bg-darkBlue -mx-5 pb-5">
        <div className="flex flex-col mx-5 pt-5 items-center">
          <Image
            src={Logo}
            alt="Logo"
            width={500}
            height={300}
            className="w-[167px] h-[98px]"
          />
        </div>
        <div className="grid grid-cols-3 mx-5">
          <div className="flex flex-col items-start">
            <h1 className="uppercase text-[8px] font-mulish-bold text-[#FFFFFF] mb-1">
              Products
            </h1>
            <div className="flex flex-col items-start">
              <h1 className="uppercase text-[7px] font-mulish-regular text-lightGray">
                Sapphire
              </h1>
              <h1 className="uppercase text-[7px] font-mulish-regular text-lightGray">
                Jewellery
              </h1>
              <h1 className="uppercase text-[7px] font-mulish-regular text-lightGray">
                Fine Jewellery
              </h1>
              <h1 className="uppercase text-[7px] font-mulish-regular text-lightGray">
                Collections
              </h1>
              <h1 className="uppercase text-[7px] font-mulish-regular text-lightGray">
                Gifts
              </h1>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <h1 className="uppercase text-[8px] font-mulish-bold text-[#FFFFFF] mb-1">
              Client Care
            </h1>
            <div className="flex flex-col items-center">
              <h1 className="uppercase text-[7px] font-mulish-regular text-lightGray">
                Track your order
              </h1>
              <h1 className="uppercase text-[7px] font-mulish-regular text-lightGray">
                Shipping and return
              </h1>
              <h1 className="uppercase text-[7px] font-mulish-regular text-lightGray">
                Product care & Repair
              </h1>
              <h1 className="uppercase text-[7px] font-mulish-regular text-lightGray">
                Request Gems
              </h1>
              <h1 className="uppercase text-[7px] font-mulish-regular text-lightGray">
                Book an appointment
              </h1>
            </div>
          </div>
          <div className="flex flex-col items-end">
            <h1 className="uppercase text-[8px] font-mulish-bold text-[#FFFFFF] mb-1">
              Our Company
            </h1>
            <div className="flex flex-col items-end">
              <h1 className="uppercase text-[7px] font-mulish-regular text-lightGray">
                About Us
              </h1>
              <h1 className="uppercase text-[7px] font-mulish-regular text-lightGray">
                Contact Us
              </h1>
              <h1 className="uppercase text-[7px] font-mulish-regular text-lightGray">
                Location
              </h1>
              <h1 className="uppercase text-[7px] font-mulish-regular text-lightGray">
                Privacy policy
              </h1>
              <h1 className="uppercase text-[7px] font-mulish-regular text-lightGray">
                Frequently asked questions
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="container py-3 mx-auto flex flex-col md:flex-row justify-between items-center font-mulish-semiBold text-darkBlue text-[9px] xl:text-base">
        <div className="text-center md:text-left">
          <p className="uppercase">
            &copy; {new Date().getFullYear()} prabhasha gems. All rights
            reserved.
          </p>
        </div>
        <div>
          <h1 className="uppercase text-blueGray xs:text-[8px] xl:text-base">
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
