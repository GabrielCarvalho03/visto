import { Navigation } from "../navigation/navigation";

import logo from "@/assets/img/logo.png";

export const Header = () => {
  return (
    <header className="w-full flex items-center lg:w-full  2xl:max-w-7xl mx-auto mt-5 md:pl-10 pl-6 2xl:p-0">
      <img src={logo} alt="" className="w-24 h-auto lg:w-auto" />
      <div className="">
        <Navigation />
      </div>
    </header>
  );
};
