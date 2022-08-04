import React, { useState, useEffect } from "react";
import Donut from "./Donut";
import axios from "axios";
import InfoTable from "./Table";
import { Row, Col } from "antd";
export default function Home() {
  const [tableData, setTableData] = useState([]);
  const [donutData, setDonutData] = useState([]);

  const getData = async () => {
    // let newDate = new Date();
    // let date = `${newDate.getFullYear()}-${
    //   newDate.getMonth() + 1
    // }-${newDate.getDate()}`;
    await axios.post("/tracking/get", { date: "2022-8-2" }).then((res) => {
      console.log(res.data);
      setDonutData(res.data);
      setTableData(
        res.data.reduce((prev, current) =>
          prev.total > current.total ? prev : current
        ).data
      );
    });
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <Row justify="space-between" wrap={true} gutter={[32, 32]}>
      <Col
        style={{
          minWidth: window.innerWidth < 720 ? 340 : "50%",
          width: "50%",
        }}
      >
        {donutData.length ? (
          <Donut data={donutData} setTableData={setTableData} />
        ) : (
          <></>
        )}
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
