import { ConsultationSection } from "@/components/shared/sessions/ConsultationSection/ConsultationSection ";
import { Hero } from "@/components/shared/hero/hero";
import { StepsSection } from "@/components/shared/sessions/StepsSection/StepsSection ";
import { DestinationSection } from "@/components/shared/sessions/DestinationSection/DestinationSection";
import { PackagesSession } from "@/components/shared/sessions/PackagesSession/PackagesSession";
import { ContactSession } from "@/components/shared/sessions/ContactSession/ContactSession";
import { Footer } from "@/components/shared/footer/footer";
import { Header } from "@/components/shared/header/header";

export const Home = () => {
  return (
    <main className="w-full min-h-screen  mt-2 ">
      <Header />
      <Hero />
      <ConsultationSection />
      <StepsSection />
      <DestinationSection />
      <PackagesSession />
      <ContactSession />
      <Footer />
    </main>
  );
};
