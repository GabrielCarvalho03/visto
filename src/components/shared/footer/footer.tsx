import { OptionButton } from "../optionButton/OptionButton";

export const Footer = () => {
  const linksUteis = [
    {
      title: "Empresa",
      links: [
        {
          title: "Home",
          link: "/",
        },
        {
          title: "Quem somos",
          link: "/",
        },
        {
          title: "Serviços",
          link: "/",
        },
        {
          title: "Contato",
          link: "/",
        },
      ],
    },
    {
      title: "Novidades",
      links: [
        {
          title: "Passaporte",
          link: "/",
        },
        {
          title: "Visto",
          link: "/",
        },
        {
          title: "Entrevista",
          link: "/",
        },
        {
          title: "Polícia Federal",
          link: "/",
        },
      ],
    },
    {
      title: "Suporte",
      links: [
        {
          title: "FAQ",
          link: "/",
        },
        {
          title: "Contato",
          link: "/",
        },
        {
          title: "Dúvidas Frequentes",
          link: "/",
        },
      ],
    },
  ];

  return (
    <article className="">
      <section className=" flex justify-between w-full  relative 2xl:max-w-7xl mx-auto  mt-32 mb-20 pl-10  2xl:p-0 ">
        <div className="w-6/12 flex flex-col justify-end">
          <span className="font-semibold">Siga em nossa redes:</span>

          <div className="flex  gap-3 mt-5">
            <OptionButton label="Instagram" active onClick={() => {}} />
            <OptionButton label="X" active onClick={() => {}} />
            <OptionButton label="Facebook" active onClick={() => {}} />
            <OptionButton label="Youtube" active onClick={() => {}} />
          </div>
        </div>

        <div className="w-6/12 flex flex-col justify-center">
          <div className="flex justify-between pr-20 mt-5">
            {linksUteis.map((item) => (
              <div key={item.title}>
                <span className=" font-family-plus-Jakarta font-semibold">
                  {item.title}
                </span>
                <div className="mt-4">
                  {item.links.map((link) => (
                    <p
                      key={link.title}
                      className="font-family-plus-Jakarta text-gray-color-100 max-w-[150px] py-1.5 cursor-pointer"
                    >
                      {link.title}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="w-full h-20 flex justify-center items-center border-t-gray-200 border-t-[0.5px]   ">
        <h1 className="text-sm font-medium">
          © 2025 Tirar Visto - Todos os Direitos Reservados
        </h1>
      </footer>
    </article>
  );
};
