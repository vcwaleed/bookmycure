import ServiceCard from "./components/ServiceCard";
import Banner from "./components/Banner";
import PopularQuestions from "./components/PopularQuestions";
export default function Home() {
  return (
    <div className="font-sans bg-white min-h-screen">
      <Banner/>
     <ServiceCard/>
     <PopularQuestions/>
    </div>
  );
}
