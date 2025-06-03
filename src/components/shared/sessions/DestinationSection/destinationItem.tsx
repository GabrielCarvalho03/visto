import type { Destination } from "./destinationList";

type DestinationItemProps = {
  destination: Destination;
  index: number;
};

export const DestinationItem = ({
  destination,
  index,
}: DestinationItemProps) => {
  const img = new Image();
  img.src = destination.image;
  img.onload = () => {
    console.log("Largura:", img.width);
    console.log("Altura:", img.height);
  };

  return (
    <section
      key={index}
      className=" bg-cover rounded-3xl relative overflow-hidden"
      style={{
        backgroundImage: `url(${destination.image})`,
        width: img.width,
        height: img.height,
      }}
    >
      <main
        className={`w-full flex justify-center items-center  absolute bottom-3  `}
      >
        <span
          className={` backdrop-blur-sm px-4 py-1.5 text-white text-base tracking-[-0.5px] rounded-4xl`}
        >
          {destination.title}
        </span>
      </main>
    </section>
  );
};
