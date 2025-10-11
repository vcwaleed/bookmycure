import ServiceCard from "./components/ServiceCard";
import Banner from "./components/Banner";
import PopularQuestions from "./components/PopularQuestions";
import ReasonBanner from "./components/ReasonBanner";
export default function Home() {
  return (
    <div className="font-sans bg-white min-h-screen">
      <Banner/>
     <ServiceCard/>
     <ReasonBanner/>
     <PopularQuestions/>
    </div>
  );
}
