import CategoryCards from "./components/CategoryCards";
import Video from "./components/Video";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center">
      <Video />
      <CategoryCards />
    </div>
  );
}
