import React from "react";
import Testimonial from "./testimonial";

const SectionSix = () => {
  const testimonialsData = [
    {
      id: 1,
      comment:
        "Absolutely Stunning! I Was Searching For The Perfect Engagement Ring And Found Exactly What I Was Looking For Here. The Sapphire Is Breathtaking, And The Craftsmanship Is Impeccable. My Fiancée Couldn't Be Happier, And Neither Could I. Thank You For Making This Special Moment Even More Memorable!",
      name: "Prabhasha Deshapriya",
      location: "(Sri Lanka)",
      image: "/placeholder.svg?height=64&width=64",
    },
    {
      id: 2,
      comment:
        "Absolutely Stunning! I Was Searching For The Perfect Engagement Ring And Found Exactly What I Was Looking For Here. The Sapphire Is Breathtaking, And The Craftsmanship Is Impeccable. My Fiancée Couldn't Be Happier, And Neither Could I. Thank You For Making This Special Moment Even More Memorable!",
      name: "Jordini Silva",
      location: "(United States)",
      image: "/placeholder.svg?height=64&width=64",
    },
    {
      id: 3,
      comment:
        "Absolutely Stunning! I Was Searching For The Perfect Engagement Ring And Found Exactly What I Was Looking For Here. The Sapphire Is Breathtaking, And The Craftsmanship Is Impeccable. My Fiancée Couldn't Be Happier, And Neither Could I. Thank You For Making This Special Moment Even More Memorable!",
      name: "Lokesh Sharma",
      location: "(India)",
      image: "/placeholder.svg?height=64&width=64",
    },
    {
      id: 4,
      comment:
        "Absolutely Stunning! I Was Searching For The Perfect Engagement Ring And Found Exactly What I Was Looking For Here. The Sapphire Is Breathtaking, And The Craftsmanship Is Impeccable. My Fiancée Couldn't Be Happier, And Neither Could I. Thank You For Making This Special Moment Even More Memorable!",
      name: "Vinil Manik",
      location: "((Sri Lanka)",
      image: "/placeholder.svg?height=64&width=64",
    },
    {
      id: 5,
      comment:
        "Absolutely Stunning! I Was Searching For The Perfect Engagement Ring And Found Exactly What I Was Looking For Here. The Sapphire Is Breathtaking, And The Craftsmanship Is Impeccable. My Fiancée Couldn't Be Happier, And Neither Could I. Thank You For Making This Special Moment Even More Memorable!",
      name: "Pubudu Gems",
      location: "((Sri Lanka)",
      image: "/placeholder.svg?height=64&width=64",
    },
  ];
  return (
    <>
      {" "}
      <div className="md:block hidden xl:mt-5 lg:mt-4 md:mt-3">
        <div className="grid grid-cols-3">
          <div className="col-span-1">
            <h2 className="uppercase md:text-[20px] lg:text-[28px] xl:text-[40px] text-darkMint text-left font-mulish-extraBold">
              Crafting Trust
            </h2>
            <h2 className="uppercase md:text-[20px] lg:text-[28px] xl:text-[40px] font-bold text-blueGray text-left font-mulish-semiBold">
              One Gem at a Time
            </h2>
          </div>
          <div className="col-span-2">
            <p className="md:text-[10px] lg:text-[14px] xl:text-base text-blueGray text-justify mt-2 font-mulish-lightItalic">
              we believe that jewellery is more than just an accessory; its a
              reflection of your inner confidence and unique style. Each piece
              in our collection is carefully crafted from the finest gemstones
              and materials, ensuring that every detail meets the highest
              standards of quality. When you wear our jewellery, you don’t just
              wear a beautiful adornment — you carry a legacy of craftsmanship,
              integrity, and timeless elegance. Discover the brilliance that
              complements your confidence, and let every piece you wear tell a
              story of unparalleled quality.
            </p>
          </div>
        </div>{" "}
      </div>
      <div className="block md:hidden mt-5">
        <h2 className="uppercase xs:text-[17px] sm:text-[19px] text-darkMint text-center font-mulish-extraBold">
          Crafting Trust
        </h2>
        <h2 className="uppercase xs:text-[17px] sm:text-[19px] xl:text-[40px] font-bold text-blueGray text-center font-mulish-semiBold">
          One Gem at a Time
        </h2>
        <p className="xs:text-[8px] sm:text-[10px] text-blueGray text-justify mt-2 font-mulish-lightItalic">
          we believe that jewellery is more than just an accessory; its a
          reflection of your inner confidence and unique style. Each piece in
          our collection is carefully crafted from the finest gemstones and
          materials, ensuring that every detail meets the highest standards of
          quality. When you wear our jewellery, you don’t just wear a beautiful
          adornment — you carry a legacy of craftsmanship, integrity, and
          timeless elegance. Discover the brilliance that complements your
          confidence, and let every piece you wear tell a story of unparalleled
          quality.
        </p>
      </div>
      <div className=" mx-auto w-full py-8 flex flex-row">
        <div className="gap-6">
          {testimonialsData.map((item) => (
            <Testimonial key={item.id} testimonialTypes={item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default SectionSix;
