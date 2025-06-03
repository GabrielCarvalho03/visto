import { CallToActionButton } from "@/components/shared/callToActionButton/CallToActionButton";
import { Navigation } from "../navigation/navigation";
import { ProfessionalCard } from "./ProfessionalCard/ProfessionalCard";
import { ImageCallToAction } from "./imageCallToAction/imageCallToAction";

import ArrowRight from "@/assets/icons/ArrowRight";
import logo from "@/assets/img/logo.png";
import { Line } from "../line/line";

type heroMetrics = {
  title: string;
  description: string;
};

export const Hero = () => {
  const heroMetrics: heroMetrics[] = [
    {
      title: "509",
      description: "Vistos Tirados",
    },

    {
      title: "602",
      description: "Passaportes Tirados",
    },

    {
      title: "634",
      description: "Famílias Felizes",
    },
  ];

  return (
    <div className="w-full flex justify-between gap-10 2xl:max-w-7xl mx-auto mt-5 pl-10 px-5 2xl:p-0 ">
      <section className="w-1/2 flex flex-col gap-10">
        <header className="w-full flex items-center">
          <img src={logo} alt="" />
          <Navigation />
        </header>

        <h1 className="text-[52px] leading-[60px]  text-greyHard  font-medium">
          Tire seu Visto conosco e não tenha nenhuma surpresa negativa!
        </h1>

        <Line />

        <div className="w-full flex relative mt-8">
          <div className="max-w-[378px] flex flex-col gap-10">
            <span className="text-gray-color-100 text-lg">
              Com uma equipe altamente treinada, nós temos todos os
              procedimentos para que seu processo seja o mais tranquilo e
              rápido. Uma consultoria completa para você e sua família não ter
              nenhuma preocupação na sua viagem.
            </span>

            <CallToActionButton
              className="w-40 h-14"
              background="blueHard"
              title="Saiba mais"
              icon={<ArrowRight />}
            />
          </div>
          <div className=" flex flex-col gap-4 absolute bottom-0 right-0">
            <ProfessionalCard />
          </div>
        </div>

        <div className="flex justify-between mt-10 pr-10">
          {heroMetrics.map((metric, index) => (
            <div
              className={`${
                index > 0 && " border-l-[0.5px] border-gray-300 pl-7"
              } `}
            >
              <h1 className="text-5xl">{metric.title}</h1>
              <span className="text-gray-color-100 text-sm flex-nowrap">
                {metric.description}
              </span>
            </div>
          ))}
        </div>
      </section>

      <ImageCallToAction />
    </div>
  );
};
