import React, { useState, useEffect } from "react";
import Donut from "./Donut";
import InfoTable from "./Table";
export default function Main() {
  const [tableData, setTableData] = useState([]);
  const data = [
    {
      title: "Code",
      total: 69,
      data: [
        {
          name: "package.json — monitor",
          time: 5.998,
        },
        {
          name: "tracking.json — monitor",
          time: 19.992,
        },
        {
          name: "ActivityTracker.js — monitor",
          time: 3.992,
        },
        {
          name: "app.js — Backend",
          time: 13.981000000000002,
        },
        {
          name: "ActivityTracker.js — Backend",
          time: 4.002,
        },
        {
          name: "tracking.json — Backend",
          time: 21.987000000000002,
        },
      ],
    },
    {
      title: "Activity Monitor",
      total: 14,
      data: [
        {
          name: "Activity Monitor",
          time: 14.038,
        },
      ],
    },
    {
      title: "Postman",
      total: 11,
      data: [
        {
          name: "Postman",
          time: 11.995,
        },
      ],
    },
  ];
  useEffect(() => {
    setTableData(
      data.reduce((prev, current) =>
        prev.total > current.total ? prev : current
      ).data
    );
  }, []);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        flexWrap: "wrap",
        marginTop: "100px",
      }}
    >
      <Donut data={data} setTableData={setTableData} />
      <InfoTable data={tableData} />
    </div>
  );
}