interface GraphProps {
  percent: number;
  time: string;
}

const GraphLine = ({ percent, time }: GraphProps) => {
  return (
    <div className="flex  flex-col  justify-center items-center mx-3">
      <div
        className={`h-${percent} ${
          percent === 40 ? "bg-fifth" : "bg-primary"
        } w-4 rounded-lg mb-3`}
      ></div>
      <span className="text-fourth text-sm font-light">{time}</span>
    </div>
  );
};

export default GraphLine;
