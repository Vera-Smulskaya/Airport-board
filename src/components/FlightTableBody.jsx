import React from "react";

export default class FlightTableBody extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { flights } = this.props;
    const formatTime = (time) =>
      new Date(time).toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      });

    return (
      <tbody>
        {flights.map((item) => {
          return (
            <tr key={item.id}>
              <td className="centered">{item.fnr}</td>
              <td>{item.alname}</td>
              <td>{item.apname}</td>
              <td className="centered colored">{formatTime(item.sched)}</td>
              <td className="centered">{item.terminal}</td>
              <td className="colored">{item.status}</td>
            </tr>
          );
        })}
      </tbody>
    );
  }
}
