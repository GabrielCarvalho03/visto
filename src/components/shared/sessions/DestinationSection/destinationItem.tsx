import { useEffect, useState } from "react";
import type { Destination } from "./destinationList";

type DestinationItemProps = {
  destination: Destination;
  index: number;
};

export const DestinationItem = ({
  destination,
  index,
}: DestinationItemProps) => {
  const [size, setSize] = useState<{ width: number; height: number }>({
    width: 300,
    height: 200,
  });

  useEffect(() => {
    const img = new Image();
    img.src = destination.image;
    img.onload = () => {
      setSize({ width: img.width, height: img.height });
    };
  }, [destination.image]);

  return (
    <section
      key={index}
      className="bg-cover bg-center rounded-3xl relative overflow-hidden"
      style={{
        backgroundImage: `url(${destination.image})`,
        width: size.width,
        height: size.height,
      }}
    >
      <main className="w-full flex justify-center items-center absolute bottom-3">
        <span className="backdrop-blur-sm px-4 py-1.5 text-white text-base tracking-[-0.5px] rounded-4xl">
          {destination.title}
        </span>
      </main>
    </section>
  );
};
