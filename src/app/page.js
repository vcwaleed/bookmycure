import ServiceCard from "./components/ServiceCard";
import Banner from "./components/Banner";
import PopularQuestions from "./components/PopularQuestions";
import ReasonBanner from "./components/ReasonBanner";
import WhatsAppIcon from "./components/WhatsAppIcon";
export default function Home() {
  return (
    <div className="font-sans bg-white min-h-screen">
      <Banner/>
     <ServiceCard/>
     <ReasonBanner/>
     <PopularQuestions/>
     <WhatsAppIcon/>
    </div>
  );
}
