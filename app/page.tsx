import { HeroSection } from "./Components/Sections/HeroSection";
import { WebsiteSections } from "./Components/Sections/WebsiteSections";
import { SaintOfChurchSection } from "./Components/Sections/SaintOfChurchSection";

export default function Home() {
  return (
    <main className="grow w-screen max-w-screen overflow-x-hidden">
      <HeroSection />
      <WebsiteSections />
      <SaintOfChurchSection />
    </main>
  );
}
