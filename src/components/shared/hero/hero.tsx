import { CallToActionButton } from "@/components/shared/callToActionButton/CallToActionButton";
import { ProfessionalCard } from "./ProfessionalCard/ProfessionalCard";
import { ImageCallToAction } from "./imageCallToAction/imageCallToAction";

import ArrowRight from "@/assets/icons/ArrowRight";
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
    <div className="w-full flex flex-col-reverse lg:flex-row justify-between lg:gap-10 2xl:max-w-7xl mx-auto mt-10 lg:pl-20 px-5 2xl:p-0 ">
      <section className="w-full lg:w-1/2 xl:w-full flex flex-col gap-10 lg:gap-2 xl:gap-10">
        <h1 className="text-[32px] md:text-[58px] leading-[40px]  md:leading-[60px]  text-greyHard  font-medium">
          Tire seu Visto conosco e não tenha nenhuma surpresa negativa!
        </h1>

        <Line />

        <div className="w-full  flex flex-col md:flex-row   relative mt-8">
          <div className="w-full  md:max-w-[378px] flex flex-col gap-10">
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
          <div className="w-full lg:w-auto flex flex-col  items-center  md:items-center lg:items-start justify-center gap-4 mt-16  md:mt-0 xl:absolute lg:-bottom-10 lg:right-0">
            <ProfessionalCard />
          </div>
        </div>

        <div className="flex justify-between mt-10 md:pr-10">
          {heroMetrics.map((metric, index) => (
            <div
              className={`${
                index > 0 && " border-l-[0.5px] border-gray-300 pl-7"
              } `}
            >
              <h1 className="text-4xl md:text-5xl">{metric.title}</h1>
              <span className="text-gray-color-100 text-xs md:text-sm flex-nowrap">
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
