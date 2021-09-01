import GraphLine from "../components/GraphLine";
const PickupTimes = () => {
  return (
    <div className="flex justify-center items-center h-96 bg-secondary rounded-2xl p-8 shadow-3xl">
      <div>
        <div className="flex flex-row justify-between">
          <h1 className="text-2xl font-medium text-fourth">
            Popular pickup <br />
            times
          </h1>
          <div className="flex flex-col justify-center items-center bg-ninth rounded-2xl w-28 h-28">
            <strong className="font-bold text-2xl text-fourth ">18:33</strong>
            <p className="font-thin text-fourth text-sm">Usually busy</p>
          </div>
        </div>
        <div className="flex flex-row items-end justify-center">
          <GraphLine percent={8} time="12:00" />
          <GraphLine percent={11} time="13:00" />
          <GraphLine percent={16} time="14:00" />
          <GraphLine percent={20} time="15:00" />
          <GraphLine percent={24} time="16:00" />
          <GraphLine percent={28} time="17:00" />
          <GraphLine percent={40} time="18:00" />
          <GraphLine percent={24} time="19:00" />
          <GraphLine percent={9} time="20:00" />
          <GraphLine percent={2} time="21:00" />
          <GraphLine percent={1} time="22:00" />
        </div>
      </div>
    </div>
  );
};

export default PickupTimes;
