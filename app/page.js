import Hero from "@/components/hero/Hero";
import Navbar from "@/components/navigation/Navbar";
import Projects from "./projects/page";
import Technologies from "./technologies/page";
import AboutMe from "./about/page";
import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col relative bg-[#0f1624]">
      <Navbar />
      <Hero />
      <Projects />
      <Technologies />
      <AboutMe />
      <Footer />
    </main>
  );
}
