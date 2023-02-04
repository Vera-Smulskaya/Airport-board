import FlightTableHeader from "./FlightTableHeader";
import FlightTableBody from "./FlightTableBody";
import React from "react";
import "./style.css";

export default class FlightTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sortedFlights: props.flights,
    };
  }

  sort(sortDirection, sortColumn) {
    const { flights } = this.props;
    let result = [...flights];

    if (sortDirection === null) {
      this.setState({
        sortedFlights: flights,
      });
      return;
    }
    result.sort((a, b) => {
      if (a[sortColumn] < b[sortColumn]) {
        return sortDirection === "asc" ? -1 : 1;
      }
      if (a[sortColumn] > b[sortColumn]) {
        return sortDirection === "asc" ? 1 : -1;
      }
      return 0;
    });

    this.setState({
      sortedFlights: result,
    });
  }

  render() {
    const { sortedFlights } = this.state;
    return (
      <table className="flightTable">
        <caption>{this.props.title}</caption>
        <FlightTableHeader
          onClick={(sortDirection, sortColumn) =>
            this.sort(sortDirection, sortColumn)
          }
        />
        <FlightTableBody flights={sortedFlights} />
      </table>
    );
  }
}
