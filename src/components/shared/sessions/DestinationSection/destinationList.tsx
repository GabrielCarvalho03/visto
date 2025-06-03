import imageDestination1 from "@/assets/img/imageDestination1.png";
import imageDestination2 from "@/assets/img/imageDestination2.png";
import imageDestination3 from "@/assets/img/imageDestination3.png";
import imageDestination4 from "@/assets/img/imageDestination4.png";
import imageDestination5 from "@/assets/img/imageDestination5.png";
import imageDestination6 from "@/assets/img/imageDestination6.png";
import { DestinationItem } from "./destinationItem";

export type Destination = {
  title: string;
  image: string;
};

export const DestinationList = () => {
  const destinatiolist1 = [
    {
      title: "Bali, Indonesia",
      image: imageDestination1,
    },
    {
      title: "Nova York, Estados Unidos",
      image: imageDestination2,
    },
    {
      title: "Santorini, Grecia",
      image: imageDestination3,
    },
  ];

  const destinatiolist2 = [
    {
      title: "Paris, França",
      image: imageDestination4,
    },
    {
      title: "Cidade do Cabo, Africa do Sul",
      image: imageDestination5,
    },
    {
      title: "Mumbai, India",
      image: imageDestination6,
    },
  ];

  return (
    <main className="flex flex-col justify-center items-center gap-10 mt-20 ">
      <div className="flex flex-wrap justify-center items-end gap-10 ">
        {destinatiolist1.map((destination, index) => (
          <DestinationItem destination={destination} index={index} />
        ))}
      </div>

      <div className="flex flex-wrap justify-center  gap-10 -mt-5 ">
        {destinatiolist2.map((destination, index) => (
          <DestinationItem destination={destination} index={index} />
        ))}
      </div>
    </main>
  );
};
