import ClockIcon from "@/assets/icons/ClockIcon";
import PhoneIcon from "@/assets/icons/PhoneIcon";

export const ConsultationSection = () => {
  return (
    <section className="w-full bg-gray-light min-h-60 md:h-80 px-10 flex flex-col mb-10 mt-10 relative ">
      <div className="w-full flex justify-between mt-12">
        <h1 className="text-2xl text-greyHard mt-5 md:mt-0 font-medium lg:text-5xl max-w-[690px] tracking-[-2px] lg:leading-[60px]">
          CONSULTORIA COMPLETA PARA TIRAR SEU VISTO
        </h1>

        <div className=" flex justify-center absolute right-10 -top-5 md:right-0 md:-top-0 lg:right-56">
          {" "}
          <PhoneIcon />{" "}
        </div>
      </div>

      <div className="w-full flex  justify-between mt-5">
        <div className=" flex justify-center  absolute -left-10 bottom-0  md:top-20 lg:top-40 md:left-56">
          <ClockIcon />
        </div>
        <h1 className="w-full text-2xl  md:mt-0 text-greyHard text-end font-medium italic lg:text-5xl tracking-[-2px] leading-[60px]">
          VOCÊ ESTA EM BOAS MÃOS!
        </h1>
      </div>
    </section>
  );
};
