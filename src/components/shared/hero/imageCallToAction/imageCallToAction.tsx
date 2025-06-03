import { CallToActionButton } from "../../callToActionButton/CallToActionButton";
import backgroundHero from "@/assets/img/backgroundHero.png";

export const ImageCallToAction = () => {
  return (
    <section
      className="
        w-full
        aspect-[4/5] 
        xl:aspect-[4/5] 
        lg:max-w-[500px]
        lg:min-h-[850px]
        xl:max-w-[900px]
        xl:max-h-auto
        mb-10
        lg:-mt-20
        bg-cover
        bg-center
        rounded-3xl
        relative
      "
      style={{ backgroundImage: `url(${backgroundHero})` }}
    >
      <CallToActionButton
        className="px-5 py-2.5 absolute right-4 top-4"
        background="primary"
        title="Tirar meu visto agora!"
      />

      <div className="absolute bottom-12 px-10 flex flex-col gap-2">
        <h1 className="text-xl sm:text-2xl md:text-4xl font-semibold text-white md:leading-[40px] tracking-[2px] md:max-w-3/4">
          Realize o seu sonho com a ajuda da Tirar Visto!
        </h1>

        <span className="text-white text-xs md:text-base">
          Com um serviço profissional, você não terá dor de cabeça para todo o
          processo do visto e entrevistas no consulado.
        </span>
      </div>
    </section>
  );
};
