import ArrowRight from "@/assets/icons/ArrowRight";
import { CallToActionButton } from "../../callToActionButton/CallToActionButton";
import { useState, useRef, useEffect } from "react";
import { Card } from "../../card/card";

import passageImage from "@/assets/img/passageImage.png";
import passagePresential from "@/assets/img/passagePresential.png";
import consultancy from "@/assets/img/consultancy.png";

export const PackagesSession = () => {
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

  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [cardWidthWithGap, setCardWidthWithGap] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(3);

  useEffect(() => {
    const updateCardsToShow = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setCardsToShow(1);
      } else if (width < 1024) {
        setCardsToShow(2);
      } else {
        setCardsToShow(3);
      }
    };
    updateCardsToShow();
    window.addEventListener("resize", updateCardsToShow);
    return () => window.removeEventListener("resize", updateCardsToShow);
  }, []);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const firstCard = container.querySelector("div");
    if (firstCard) {
      const width = firstCard.clientWidth;
      const gap = 16;
      setCardWidthWithGap(width + gap);
    }
  }, [listCard]);

  const prev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? listCard.length - cardsToShow : prevIndex - 1
    );
  };

  const next = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === listCard.length - cardsToShow ? 0 : prevIndex + 1
    );
  };

  return (
    <main className="w-full flex flex-col gap-6 relative  2xl:max-w-7xl mx-auto my-32 pl-5 md:pl-10 2xl:p-0">
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
          onClick={() => prev()}
          className="h-14 w-14 rounded-full border-[0.5px] flex items-center justify-center cursor-pointer transition-colors bg-white hover:bg-blueHard hover:text-white "
        >
          <div className="rotate-180">
            <ArrowRight className="hover" color="#1b2543" />
          </div>
        </div>

        <div
          onClick={() => next()}
          className="h-14 w-14 rounded-full border-[0.5px] flex items-center justify-center cursor-pointer transition-colors bg-white hover:bg-blueHard hover:text-white"
        >
          <ArrowRight />
        </div>
      </div>

      <div className="w-full overflow-hidden">
        <div
          ref={containerRef}
          className="flex flex-nowrap gap-4 transition-transform duration-500"
          style={{
            width: cardWidthWithGap * cardsToShow,
            transform: `translateX(-${currentIndex * cardWidthWithGap}px)`,
          }}
        >
          {listCard.map((item, index) => (
            <div
              key={index}
              className="flex-shrink-0 snap-start"
              style={{
                minWidth: "80%",
              }}
            >
              <Card
                title={item.title}
                service={item.service}
                time={item.time}
                image={item.image}
                price={item.price}
              />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};
