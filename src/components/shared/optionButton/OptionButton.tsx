type PlanButtonProps = {
  label: string;
  active?: boolean;
  onClick: () => void;
};

export const OptionButton = ({ label, active, onClick }: PlanButtonProps) => (
  <button
    onClick={onClick}
    className={`rounded-full border-[0.5px] px-5 py-2.5 flex justify-center items-center cursor-pointer md: ${
      active
        ? "border-greyHard text-gray-color-400"
        : "border-grey text-gray-color-100"
    } bg-white`}
  >
    <h1 className="text-[10px] md:text-base font-semibold">{label}</h1>
  </button>
);
