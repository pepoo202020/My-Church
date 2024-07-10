import { HeroSection } from "./Components/Sections/HeroSection";
import { WebsiteSections } from "./Components/Sections/WebsiteSections";

export default function Home() {
  return (
    <main className="grow w-screen max-w-screen overflow-x-hidden">
      <HeroSection />
      <WebsiteSections />
    </main>
  );
}
