import { Navigation } from "@/components/navigation";
import { Hero } from "@/components/hero";
import { Experiences } from "@/components/experiences";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <Experiences />
      <Footer />
    </main>
  );
}
