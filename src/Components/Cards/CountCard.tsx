import CountUp from "react-countup";
import { HiArrowNarrowUp, HiArrowNarrowDown } from "react-icons/hi";

interface CountCardProps {
  value: number;
  up: boolean;
  type: string;
}

const CountCard: React.FunctionComponent<CountCardProps> = ({
  type,
  up,
  value,
}) => {
  return (
    <div className="card-wrapper count-card row p-3">
      <div className="d-flex gap-2 h4">
        {up ? (
          <HiArrowNarrowUp className="h5 " color="green" />
        ) : (
          <HiArrowNarrowDown className="h5 " color="red" />
        )}
        {type === "Earnings" && "$"}
        {type === "Success Rate" && "%"}

        <CountUp end={value} />
      </div>
      <span className="opacity-50 h6 col-12">{type}</span>
    </div>
  );
};

export default CountCard;
