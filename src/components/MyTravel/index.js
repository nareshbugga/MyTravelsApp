import { Component } from "react";
import { GrFormLocation } from "react-icons/gr";
import ShowVehicles from "../ShowVehicles";
import "./index.css";

class MyTravels extends Component {
  state = {
    fromPoint: "",
    toPoint: "",
    showVehicles: false,
    vehiclesDetails: [],
    errorMsg: "",
  };

  onSubmitForm = async (event) => {
    event.preventDefault();

    const { fromPoint, toPoint } = this.state;
    if (fromPoint === "" && toPoint === "") {
      this.setState({ errorMsg: "*required this felids" });
    } else {
      const url = "https://mocki.io/v1/d3b24956-3f59-4d7b-9edc-3bd041d88e44";
      const options = {
        method: "GET",
      };
      const response = await fetch(url, options);
      const data = await response.json();
      const randomItem = data[Math.floor(Math.random() * data.length)];
      console.log(randomItem);
      this.setState({
        vehiclesDetails: randomItem,
        showVehicles: true,
        fromPoint: "",
        toPoint: "",
      });
    }
  };

  onFromLocation = (event) => {
    this.setState({ fromPoint: event.target.value });
  };

  onToLocation = (event) => {
    this.setState({ toPoint: event.target.value });
  };

  onBackToForm = () => {
    this.setState({ showVehicles: false, errorMsg: "" });
  };

  renderMyTravel = () => {
    const { fromPoint, toPoint, showVehicles, errorMsg, vehiclesDetails } =
      this.state;
    return (
      <div className="main-container">
        {showVehicles ? (
          <ShowVehicles
            vehiclesDetails={vehiclesDetails}
            backToForm={this.onBackToForm}
          />
        ) : (
          <div className="sub-container">
            <h1>MyTravels</h1>
            <form className="form-container" onSubmit={this.onSubmitForm}>
              <div className="input-container">
                <div className="label-container">
                  <label htmlFor="From">FromLocation</label>
                  <GrFormLocation size={20} />
                </div>
                <input
                  type="text"
                  id="From"
                  placeholder="From..."
                  onChange={this.onFromLocation}
                  value={fromPoint}
                />
                {errorMsg !== "" && <p>{errorMsg}</p>}
              </div>
              <div className="input-container">
                <div className="label-container">
                  <label htmlFor="To">ToLocation</label>
                  <GrFormLocation size={20} />
                </div>
                <input
                  type="text"
                  id="To"
                  placeholder="To..."
                  onChange={this.onToLocation}
                  value={toPoint}
                />
                {errorMsg !== "" && <p>{errorMsg}</p>}
              </div>
              <div className="input-container">
                <label htmlFor="Date">SelectDate</label>
                <input type="date" id="Date" />
              </div>
              <button type="submit" className="search-button">
                Search
              </button>
            </form>
          </div>
        )}
      </div>
    );
  };

  render() {
    return <div>{this.renderMyTravel()}</div>;
  }
}
export default MyTravels;
