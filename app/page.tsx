import { Navigation } from "@/components/navigation";
import { SplashScreen } from "@/components/splash-screen"; // Check your import path
import { Hero } from "@/components/hero";
import { Experiences } from "@/components/experiences";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      {/* 1. Add the Splash Screen right here at the top */}
      <SplashScreen />
      <Navigation />
      <Hero />
      <Experiences />
      <Footer />
    </main>
  );
}
