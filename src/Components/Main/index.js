import React, { useState, useEffect } from "react";
import Donut from "./Donut";
import axios from "axios";
import InfoTable from "./Table";
import { Row, Col } from "antd";
export default function Main() {
  const [tableData, setTableData] = useState([]);
  const [donutData, setDonutData] = useState([]);

  useEffect(() => {
    let newDate = new Date();
    let date = `${newDate.getFullYear()}-${
      newDate.getMonth() + 1
    }-${newDate.getDate()}`;
    axios.post("/tracking/get", { date }).then((res) => {
      setDonutData(res.data);
      setTableData(
        res.data.reduce((prev, current) =>
          prev.total > current.total ? prev : current
        ).data
      );
    });
    // setTableData(
    //   data.reduce((prev, current) =>
    //     prev.total > current.total ? prev : current
    //   ).data
    // );
  }, []);

  return (
    <Row justify="space-between" wrap={true} gutter={[32, 32]}>
      <Col
        style={{
          minWidth: window.innerWidth < 720 ? 340 : "50%",
          width: "50%",
        }}
      >
        <Donut data={donutData} setTableData={setTableData} />
      </Col>

      <Col
        style={{
          minWidth: window.innerWidth < 720 ? 340 : "50%",
          width: "50%",
        }}
      >
        <InfoTable data={tableData} />
      </Col>
    </Row>
  );
}
