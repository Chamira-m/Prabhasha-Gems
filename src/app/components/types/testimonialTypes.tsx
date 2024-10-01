import { StaticImageData } from "next/image"; // Import StaticImageData

export type TestimonialTypes = {
  id: number;
  comment: string;
  name: string;
  location: string;
  image: StaticImageData | string;
};
