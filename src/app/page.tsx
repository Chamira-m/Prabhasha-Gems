import CategoryCards from "./components/CategoryCards";
import SectionTwo from "./components/SectionTwo";
import SectionOne from "./components/SectionOne";
import Video from "./components/Video";
import SectionThree from "./components/SectionThree";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center">
      <Video />
      <CategoryCards />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
    </div>
  );
}
