import PickupTimes from "./components/PickupTimes";
import PackageDetails from "./components/PackageDetails";
import "./App.css";

function App() {
  return (
    <div className="flex flex-col xl:flex-row bg-primary w-full h-screen font-sans justify-center items-center ">
      <PickupTimes />
      <PackageDetails />
    </div>
  );
}

export default App;
