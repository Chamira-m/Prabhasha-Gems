import CategoryCards from "./components/CategoryCards";
import SectionTwo from "./components/SectionTwo";
import SectionOne from "./components/SectionOne";
import Video from "./components/Video";
import SectionThree from "./components/SectionThree";
import SectionFour from "./components/SectionFour";
import SectionFive from "./components/SectionFive";
import SectionSix from "./components/SectionSix";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center">
      <Video />
      <CategoryCards />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <SectionSix />
    </div>
  );
}
