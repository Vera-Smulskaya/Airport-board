import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import data from "./data.json";
import FlightTable from "./components/FlightTable";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <FlightTable flights={data.arrivals} title="Arrivals" />
        <FlightTable flights={data.departures} title="Departures" />
      </div>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
