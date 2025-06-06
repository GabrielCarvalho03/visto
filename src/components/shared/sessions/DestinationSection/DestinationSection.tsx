import BorderCircle from "@/assets/icons/BorderCircle";
import { CallToActionButton } from "../../callToActionButton/CallToActionButton";
import { DestinationList } from "./destinationList";
import SquareCircle from "@/assets/icons/SquareCircle";

export const DestinationSection = () => {
  return (
    <main className="w-full flex flex-col  gap-10 relative  mx-auto  my-16 md:my-32 md:pl-10  2xl:p-0">
      <div className="absolute top-0 right-0">
        <BorderCircle className=" w-[50%] ml-[60%] md:w-10/12 md:ml-[17%]  lg:w-12/12 xl:w-12/12" />
      </div>

      <div className="absolute top-0 left-0 rotate-y-180 ">
        <BorderCircle className="w-[50%] ml-[60%] md:w-10/12 md:ml-[17%]  lg:w-12/12 xl:w-12/12" />
      </div>

      <section className="w-full flex flex-col items-center justify-center mt-28">
        <CallToActionButton
          className="py-2.5 px-5"
          background="primary"
          title="Top Destinos"
        />

        <h1 className="text-greyHard text-4xl md:text-5xl text-center md:text-start  font-medium mt-2">
          Destinos mais procurados{" "}
        </h1>
        <span className="text-center text-gray-color-100 max-w-[584px] mt-3">
          Confira os destinos mais procurados por nossos clientes nos últimos
          meses, qual seria o seu novo destino?
        </span>

        <section className="w-full flex items-center justify-between mt-10 relative">
          <div className="absolute top-0 right-0">
            <SquareCircle className=" w-[50%] ml-[60%] md:w-10/12 md:ml-[17%]  lg:w-12/12 xl:w-12/12" />
          </div>

          <div className="absolute top-0 left-0 rotate-y-180 ">
            <SquareCircle className=" w-[50%] ml-[60%] md:w-10/12 md:ml-[17%]  lg:w-12/12 xl:w-12/12" />
          </div>
        </section>

        <section className="flex flex-col items-center justify-center mt-5">
          <CallToActionButton
            className="py-2.5 px-5 z-10"
            background="blueHard"
            title="Conheça mais"
          />

          <DestinationList />
        </section>
      </section>
    </main>
  );
};
