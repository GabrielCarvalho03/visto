import { ConsultationSection } from "@/components/shared/sessions/ConsultationSection/ConsultationSection ";
import { Hero } from "@/components/shared/hero/hero";
import { StepsSection } from "@/components/shared/sessions/StepsSection/StepsSection ";
import { DestinationSection } from "@/components/shared/sessions/DestinationSection/DestinationSection";
import { PackagesSession } from "@/components/shared/sessions/PackagesSession/PackagesSession";
import { ContectSession } from "@/components/shared/sessions/ContectSession/ContectSession";
import { Footer } from "@/components/shared/footer/footer";

export const Home = () => {
  return (
    <main className="w-full min-h-screen  mt-2 ">
      <Hero />
      <ConsultationSection />
      <StepsSection />
      <DestinationSection />
      <PackagesSession />
      <ContectSession />
      <Footer />
    </main>
  );
};
