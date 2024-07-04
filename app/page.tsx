import Image from "next/image";
import { HeroSection } from "./Components/Sections/HeroSection";

export default function Home() {
  return (
    <main className="grow w-screen max-w-screen overflow-x-hidden">
      <HeroSection />
    </main>
  );
}
