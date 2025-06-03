import ArrowRight from "@/assets/icons/ArrowRight";
import professional from "@/assets/img/professional.png";

export const ProfessionalCard = () => {
  return (
    <>
      <img src={professional} alt="" />
      <section className="w-full flex">
        <div className="w-full flex flex-col">
          <h1 className="font-bold">Conheça a Bruna</h1>
          <span className="text-xs text-gray-color-100">Ver vídeo</span>
        </div>
        <div className=" h-9 w-10 rounded-full bg-blueHard flex items-center justify-center">
          <ArrowRight />
        </div>
      </section>
    </>
  );
};
