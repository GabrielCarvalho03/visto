import ArrowRight from "@/assets/icons/ArrowRight";

type CallToActionButtonProps = {
  title: string;
  background?: "primary" | "blueHard";
  className?: string;
  icon?: React.ReactNode;
};

export const CallToActionButton = ({
  title,
  background,
  className = "",
  icon,
}: CallToActionButtonProps) => {
  const bgClass = background === "primary" ? "bg-primary" : "bg-blueHard";
  const textColor =
    background === "primary" ? "text-gray-color-400" : "text-white";

  return (
    <main
      className={`rounded-full ${bgClass} flex justify-center items-center  ${className}`}
    >
      <div className="flex gap-2">
        <h1 className={`${textColor} text-base font-semibold`}>{title}</h1>

        {icon && <ArrowRight />}
      </div>
    </main>
  );
};
