interface StepsProps {
  title: string;
  date: string;
  delivered: boolean;
}

const DeliveryStep = ({ title, date, delivered }: StepsProps) => {
  return (
    <div
      className={`flex flex-row justify-start  my-5 py-5 pr-4 z-3 ${
        delivered ? "bg-eighth" : "bg-white"
      }`}
    >
      <div
        className={`${
          delivered
            ? "bg-seventh animate-ping border-white"
            : "bg-ninth border-sixth"
        } w-7 h-7 rounded-full ml-8 mr-4 border-4 z-3 relative flex justify-center items-center`}
      >
        <i
          className={`fas fa-check text-sm ${delivered ? "flex" : "hidden"}`}
        ></i>
      </div>
      <div className="mr-4">
        <h3 className="font-medium text-ninth">{title}</h3>
        <span className="text-sixth text-sm">{date}</span>
      </div>
    </div>
  );
};

export default DeliveryStep;
