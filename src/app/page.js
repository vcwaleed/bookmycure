import ServiceCard from "./components/ServiceCard";
import Banner from "./components/Banner";
import PopularQuestions from "./components/PopularQuestions";
import ReasonBanner from "./components/ReasonBanner";
import WhatsAppIcon from "./components/WhatsAppIcon";
import HealthPackages from "./components/HealthPackages";
import AestheticWellnessClinics from "./components/AestheticWellnessClinics";
import Consultant from "./components/Consultant";
export default function Home() {
  return (
    <div className="font-sans bg-white min-h-screen">
     <Banner/>
     <ServiceCard/>
     <HealthPackages/>
     <AestheticWellnessClinics/>
     <ReasonBanner/>
     <Consultant/>
     <PopularQuestions/>
     <WhatsAppIcon/>
    </div>
  );
}
