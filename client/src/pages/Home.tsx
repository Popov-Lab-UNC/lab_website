import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import ResearchAreas from "@/components/sections/ResearchAreas";
import TeamMembers from "@/components/sections/TeamMembers";
import Publications from "@/components/sections/Publications";
//import ProcessVisualization from "@/components/sections/ProcessVisualization";
import ContactForm from "@/components/sections/ContactForm";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ResearchAreas />
        <TeamMembers />
        <Publications />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
