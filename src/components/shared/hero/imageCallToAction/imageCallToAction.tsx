import { CallToActionButton } from "../../callToActionButton/CallToActionButton";
import backgroundHero from "@/assets/img/backgroundHero.png";

export const ImageCallToAction = () => {
  return (
    <main>
      <section
        className="min-w-[675px] mb-10 min-h-[799px] bg-cover rounded-3xl relative "
        style={{ backgroundImage: `url(${backgroundHero})` }}
      >
        <CallToActionButton
          className="px-5 py-2.5 absolute right-4 top-4 "
          background="primary"
          title="Tirar meu visto agora!"
        />

        <div className="absolute bottom-12 px-10 flex flex-col gap-2">
          <h1 className="text-4xl font-semibold text-white leading-[40px] tracking-[2px] max-w-3/4">
            Realize o seu sonho com a ajuda da Tirar Visto!
          </h1>

          <span className="text-white">
            Com um serviço profissional, você não terá dor de cabeça para todo o
            processo do visto e entrevistas no consulado.
          </span>
        </div>
      </section>
    </main>
  );
};
