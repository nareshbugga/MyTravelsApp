import "./index.css";
import { FaTrain, FaBusAlt } from "react-icons/fa";

import { MdFlight } from "react-icons/md";

const ShowVehicles = (props) => {
  const { vehiclesDetails, backToForm } = props;
  const { train, bus, flight } = vehiclesDetails;
  const backTravelToForm = () => {
    backToForm();
  };
  return (
    <div className="vehicles-container">
      <div className="container">
        <FaBusAlt size={28} />
        <p className="description">Bus: {bus}</p>
      </div>
      <div className="container">
        <FaTrain size={28} />
        <p className="description">Train: {train}</p>
      </div>
      <div className="container">
        <MdFlight size={28} />
        <p className="description">Flight: {flight}</p>
      </div>
      <button
        type="button"
        className="search-button"
        onClick={backTravelToForm}
      >
        Back...
      </button>
    </div>
  );
};

export default ShowVehicles;
