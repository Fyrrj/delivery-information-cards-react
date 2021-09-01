import DeliveryStep from "../components/DeliveryStep";
const PackageDetails = () => {
  return (
    <div className="flex flex-col bg-white mt-8 xl:ml-8 rounded-2xl shadow-2xl">
      <div>
        <div>
          <h1 className="text-2xl font-bold text-secondary pl-10 pt-8 mb-1 ">
            Package details
          </h1>
          <h2 className="text-xl font-medium text-primary pl-10 mb-1">
            No: RA778007
          </h2>
        </div>
        <div className="flex flex-col relative overflow-hidden">
          <span className="absolute h-full bg-sixth w-1 left-11 z-1"></span>
          <DeliveryStep
            title="The shipment has been delivered"
            date="3 June 10:56"
            delivered={true}
          />
          <DeliveryStep
            title="The shipment arrived at Spar Parken"
            date="2 June 12:43"
            delivered={false}
          />
          <DeliveryStep
            title="The shipment has been handed to Bring"
            date="2 June 7:28"
            delivered={false}
          />
        </div>
      </div>
    </div>
  );
};

export default PackageDetails;
