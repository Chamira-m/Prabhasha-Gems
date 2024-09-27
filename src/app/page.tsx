import CategoryCards from "./components/CategoryCards";
import SectionTwo from "./components/SectionTwo";
import SectionOne from "./components/SectionOne";
import Video from "./components/Video";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center">
      <Video />
      <CategoryCards />
      <SectionOne />
      <SectionTwo />
    </div>
  );
}
