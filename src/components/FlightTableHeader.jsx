import React from "react";

const headers = [
  { name: "fnr", title: "flight" },
  { name: "alname", title: "airline" },
  { name: "apname", title: "destination" },
  { name: "sched", title: "time" },
  { name: "terminal", title: "terminal" },
  { name: "status", title: "status" },
];

export default class FlightTableHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sortDirection: null,
    };
  }

  render() {
    const { sortDirection } = this.state;
    return (
      <thead>
        <tr>
          {headers.map((item) => (
            <th
              key={item.name}
              onClick={() => {
                let newSortDirection;
                if (sortDirection === null) {
                  newSortDirection = "asc";
                } else if (sortDirection === "asc") {
                  newSortDirection = "desc";
                } else {
                  newSortDirection = null;
                }
                this.props.onClick(newSortDirection, item.name);
                this.setState({
                  sortDirection: newSortDirection,
                });
              }}
            >
              {item.title}
            </th>
          ))}
        </tr>
      </thead>
    );
  }
}
