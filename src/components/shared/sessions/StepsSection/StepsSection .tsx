import { CallToActionButton } from "@/components/shared/callToActionButton/CallToActionButton";

import familyTraveling from "@/assets/img/familyTraveling.png";
import { StepItem } from "./stepItem";

export const StepsSection = () => {
  const steps = [
    {
      title: "Etapa Inicial",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      showAddIcon: false,
    },
    {
      title: "Processo de Entrevista",
      description: "Leia mais",
      showAddIcon: true,
    },
    {
      title: "Entrega de Documentos",
      description: "Leia mais",
      showAddIcon: true,
    },
  ];

  return (
    <section className="w-full flex flex-col gap-10 2xl:max-w-7xl mx-auto  md:my-32 pl-3 p2-3 md:pl-10  2xl:p-0 ">
      <div className="w-full flex flex-col  md:flex-row items-center pl-3 md:pl-0 pr-10">
        <div className="w-full md:w-2/3 flex flex-col">
          <CallToActionButton
            className="px-5 py-2.5 w-48 "
            background="primary"
            title="Veja como funciona"
          />

          <h1 className="text-5xl xl:text-6xl font-medium tracking-[-1.5px]">
            Sua tranquilidade <br /> não tem preço!
          </h1>
        </div>
        <div className="w-12/12 mt-10">
          <h1 className="text-base text-gray-color-100 tracking-[-1px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </h1>
        </div>
      </div>

      <div className="w-full flex flex-col md:flex-row justify-between items-center px-2 md:px-0 gap-10 mt-14">
        <div className="w-full md:w-1/2 flex flex-col">
          <img src={familyTraveling} alt="familia viajando" />
        </div>
        <div className=" w-full md:w-1/2 flex flex-col gap-5 ">
          {steps.map((step) => (
            <StepItem key={step.title} {...step} />
          ))}
        </div>
      </div>
    </section>
  );
};
