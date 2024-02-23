import AboutSection from "../AboutSection";
import NewsPart from "../NewsPart";
import VideTour from "../VideTour";

export default function HomeView() {
  return (
    <div
      style={{
        background: "url('/src/assets/images/afrosiyob123.jpg')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="bg-[#00000066]">
        <AboutSection />
        <NewsPart />
        <VideTour />
      </div>
    </div>
  );
}
