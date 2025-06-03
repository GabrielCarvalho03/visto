import ArrowRight from "@/assets/icons/ArrowRight";
import { CallToActionButton } from "../../callToActionButton/CallToActionButton";

export const ContactSession = () => {
  return (
    <article className="w-full flex flex-col md:flex-row justify-between items-center relative pr-16  2xl:max-w-7xl mx-auto  md:my-40 pl-10  2xl:p-0">
      <div className=" w-full items-center md:items-start md:w-4/12 flex flex-col ">
        <h1 className="text-greyHard text-4xl md:text-5xl text-center md:text-start font-medium leading-[60px] tracking-[-2px]">
          Está com alguma dúvida?
        </h1>
        <span className=" text-gray-color-100 leading-[20px] mt-3">
          Entre em contato através do nosso canal direto ao cliente através do
          botão abaixo
        </span>
        <CallToActionButton
          className="w-[225px] px-5  py-2.5 cursor-pointer mt-5"
          background="blueHard"
          title="Central de Atendimento"
        />
      </div>

      <div className="w-full  md:w-5/12 mt-20 md:mt-0  flex flex-col items-center gap-2 cursor-pointer">
        <div className="w-full   ml-20">
          <div className="flex items-center justify-between">
            <h1 className="text-greyHard text-xl md:text-4xl  leading-[60px] tracking-[-2px]">
              Receba novidades
            </h1>
            <div className="mr-16 -rotate-z-45">
              <ArrowRight width={70} height={40} color="#232323" />
            </div>
          </div>
          <div className="w-10/12 h-[0.5px] bg-greyHard" />
        </div>
      </div>
    </article>
  );
};
