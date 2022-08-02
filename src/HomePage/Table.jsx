import React from "react";
import { Table } from "antd";
export default function InfoTable({ data }) {
  const secondsToHms = (d) => {
    d = Number(d);
    const h = Math.floor(d / 3600);
    const m = Math.floor((d % 3600) / 60);
    const s = Math.floor((d % 3600) % 60);

    const hDisplay = h > 0 ? h + (h === 1 ? " hour, " : " hours, ") : "";
    const mDisplay = m > 0 ? m + (m === 1 ? " minute, " : " minutes, ") : "";
    const sDisplay = s > 0 ? s + (s === 1 ? " second " : " seconds") : "";

    return hDisplay + mDisplay + sDisplay;
  };
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      width: 260,

      // sortable: true,
    },
    {
      title: "Time",
      dataIndex: "time",
      render: secondsToHms,
      width: 240,
    },
  ];
  return <Table columns={columns} dataSource={data} width={500} />;
}
