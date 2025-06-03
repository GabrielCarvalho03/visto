import { Line } from "../line/line";
import { CallToActionButton } from "../callToActionButton/CallToActionButton";
import { useState } from "react";
import { OptionButton } from "../optionButton/OptionButton";

type CardProps = {
  title: string;
  service: string;
  time: string;
  image: string;
  price: string;
};

export const Card = ({ title, service, time, image, price }: CardProps) => {
  const [isActiveButton, setIsActiveButton] = useState(false);
  return (
    <article className="w-full max-w-[424px] aspect-[2/3] p-4 border-[0.5px] border-[#E5E5E5] rounded-2xl">
      <img src={image} alt={title} />

      <div className="w-full flex gap-10 items-center mt-4">
        <OptionButton
          label="Basic"
          active={!isActiveButton}
          onClick={() => setIsActiveButton(false)}
        />

        <OptionButton
          label="Premium"
          active={isActiveButton}
          onClick={() => setIsActiveButton(true)}
        />
      </div>

      <h1 className="mt-5 text-greyHard text-3xl font-semibold leading-[30px]">
        {title}
      </h1>

      <div className="w-full flex justify-between items-center mt-4 ">
        <div className="w-full flex flex-col gap-2">
          <span className="text-gray-color-400 font-medium">Atendimento</span>
          <p className="text-gray-color-100 ">{service}</p>
        </div>

        <div className="w-full flex flex-col gap-2">
          <span className="text-gray-color-400 font-medium">Tempo</span>
          <p className="text-gray-color-100 ">{time}</p>
        </div>
      </div>

      <div className="py-5">
        <Line />
      </div>

      <div className="w-full flex justify-between items-center mt-4 ">
        <div className="w-full flex flex-col gap-2">
          <p className="text-gray-color-100 ">A partir de</p>
          <span className="text-gray-color-400 font-semibold text-3xl ">
            {price}
          </span>
        </div>

        <CallToActionButton
          className="px-5 py-2.5 cursor-pointer"
          background="blueHard"
          title="Contratar"
        />
      </div>
    </article>
  );
};
