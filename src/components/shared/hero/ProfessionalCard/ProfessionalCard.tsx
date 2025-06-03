import ArrowRight from "@/assets/icons/ArrowRight";
import professional from "@/assets/img/professional.png";

export const ProfessionalCard = () => {
  return (
    <>
      <img
        className="w-6/12 sm:w-4/12 md:w-6/12  lg:w-full"
        src={professional}
        alt=""
      />
      <section className="w-full  flex   ">
        <div className="w-full  flex flex-col items-center  ">
          <h1 className="font-bold">Conheça a Bruna</h1>
          <span className="text-xs text-gray-color-100">Ver vídeo</span>
        </div>

        <div className="hidden  h-9 w-10 rounded-full   bg-blueHard lg:flex items-center justify-center text-white">
          <ArrowRight />
        </div>
      </section>
      <div className=" lg:hidden h-10 w-10 rounded-full   bg-blueHard flex items-center justify-center text-white">
        <ArrowRight />
      </div>
    </>
  );
};
