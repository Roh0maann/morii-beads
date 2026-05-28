import HeroSection from "@/components/home/HeroSection";
import StorySection from "@/components/home/StorySection";
import CollectionsSection from "@/components/home/CollectionsSection";

export default function Home() {
  return (
    <main className="flex-grow">
      <HeroSection />
      <StorySection />
      <CollectionsSection />
    </main>
  );
}
