import ArrowRight from "@/assets/icons/ArrowRight";
import { CallToActionButton } from "../../callToActionButton/CallToActionButton";
import { useState } from "react";
import { Card } from "../../card/card";

import passageImage from "@/assets/img/passageImage.png";
import passagePresential from "@/assets/img/passagePresential.png";
import consultancy from "@/assets/img/consultancy.png";

export const PackagesSession = () => {
  const [isActiveButton, setIsActiveButton] = useState(false);
  const listCard = [
    {
      title: "Passaporte",
      service: "On-line",
      time: "45 dias",
      image: passageImage,
      price: "R$ 890,00",
    },
    {
      title: "Passaporte + Visto",
      service: "On-line + Presencial",
      time: "25 dias",
      image: passagePresential,
      price: "R$ 1.290,00",
    },
    {
      title: "Consultoria Completa",
      service: "Presencial Completo",
      time: "10 dias",
      image: consultancy,
      price: "R$ 1.890,00",
    },
  ];

  return (
    <main className="w-full flex flex-col  gap-2 relative 2xl:max-w-7xl mx-auto  my-32 pl-10  2xl:p-0">
      <div className="w-full">
        <CallToActionButton
          className="w-16 px-12 py-2.5"
          background="primary"
          title="Pacotes"
        />
        <h1 className="text-greyHard text-5xl font-medium mt-2">
          Confira nossos pacotes
        </h1>
      </div>

      <div className="w-full flex justify-end gap-10 pr-10">
        <div
          onClick={() => setIsActiveButton(true)}
          className={`h-14 w-14 rounded-full border-[0.5px]  ${
            isActiveButton ? "bg-blueHard" : "bg-white "
          } flex items-center justify-center`}
        >
          <div className="rotate-180">
            <ArrowRight color={isActiveButton ? "#fff" : "#1b2543"} />
          </div>
        </div>

        <div
          onClick={() => setIsActiveButton(false)}
          className={`h-14 w-14 rounded-full border-[0.5px] ${
            !isActiveButton ? "bg-blueHard" : "bg-white "
          } flex items-center justify-center`}
        >
          <ArrowRight color={!isActiveButton ? "#fff" : "#1b2543"} />
        </div>
      </div>

      <div className="w-full flex  gap-16">
        {listCard.map((item, index) => (
          <Card
            key={index}
            title={item.title}
            service={item.service}
            time={item.time}
            image={item.image}
            price={item.price}
          />
        ))}
      </div>
    </main>
  );
};
