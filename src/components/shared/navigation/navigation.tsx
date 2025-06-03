export const Navigation = () => {
  return (
    <nav className="-mt-2 px-2 flex justify-between items-center text-[0.6rem] xs:text-lg sm:text-sm md:text-base xl:text-lg">
      <ul className="flex space-x-6 lg:space-x-6">
        <li>
          <a href="/" className="hover:text-yellow-400 font-bold">
            Home
          </a>
        </li>
        <li>
          <a href="/about" className="hover:text-yellow-400 text-greyHard">
            Quem somos
          </a>
        </li>
        <li>
          <a href="/services" className="hover:text-yellow-400 text-greyHard">
            Serviços
          </a>
        </li>
        <li>
          <a href="/contact" className="hover:text-yellow-400 text-greyHard">
            Contato
          </a>
        </li>
      </ul>
    </nav>
  );
};
