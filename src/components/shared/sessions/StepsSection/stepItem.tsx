import AddIcon from "@/assets/icons/AddIcon";
import { Line } from "../../line/line";

type StepItemProps = {
  title: string;
  description: string;
  showAddIcon?: boolean;
};

export const StepItem = ({
  title,
  description,
  showAddIcon,
}: StepItemProps) => (
  <div>
    <span className=" text-3xl  xl:text-5xl font-medium text-greyHard">
      {title}
    </span>

    <p className="text-gray-color-100 max-w-9/12 py-5 flex items-center gap-1">
      {showAddIcon && <AddIcon />}
      {description}
    </p>

    <div className="md:pr-44">
      <Line />
    </div>
  </div>
);
