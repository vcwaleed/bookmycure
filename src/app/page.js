import Image from "next/image";
import ServiceCard from "./components/ServiceCard";

export default function Home() {
  return (
    <div className="font-sans bg-white min-h-screen">
     <ServiceCard/>
    </div>
  );
}
