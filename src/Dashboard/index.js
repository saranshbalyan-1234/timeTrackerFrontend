import { StyledLayout } from "./style";
import { HomeOutlined } from "@ant-design/icons";
import {
  Layout,
  Breadcrumb,
  PageHeader,
  Button,
  Tag,
  Card,
  Statistic,
  Row,
  Col,
  DatePicker,
} from "antd";
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
const { RangePicker } = DatePicker;
const { Content } = Layout;
export default function Dashboard({ children }) {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();

  const breadcrumbNameMap = {
    "/profile": "Profile",
  };

  const pathSnippets = location.pathname.split("/").filter((i) => i);

  const extraBreadcrumbItems = pathSnippets.map((_, index) => {
    const url = `/${pathSnippets.slice(0, index + 1).join("/")}`;
    return (
      <Breadcrumb.Item key={url}>
        <Link style={{ textTransform: "capitalize" }} to={url}>
          {breadcrumbNameMap[url] || url.substring(1)}
        </Link>
      </Breadcrumb.Item>
    );
  });

  const breadcrumbItems = [
    <Breadcrumb.Item key="home">
      <Link to="/">
        <HomeOutlined /> Home
      </Link>
    </Breadcrumb.Item>,
  ].concat(extraBreadcrumbItems);

  return (
    <StyledLayout>
      <Layout>
        <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />
        <Layout>
          <Header setCollapsed={setCollapsed} collapsed={collapsed} />
          <Content style={{ margin: "24px 16px 0" }}>
            <Breadcrumb>{breadcrumbItems}</Breadcrumb>
            <div
              className="site-layout-background"
              style={{
                marginTop: "15px",
              }}
            >
              {" "}
              <PageHeader
                onBack={() => window.history.back()}
                title="Dashboard"
                className="site-page-header"
                subTitle="All Major Statistics"
                tags={<Tag color="blue">Active</Tag>}
                extra={
                  <div
                    style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}
                  >
                    <RangePicker key="3" />
                    <Button
                      // style={{ marginLeft: "10px", marginRight: "10px" }}
                      key="2"
                    >
                      Yesterday
                    </Button>
                    <Button key="1" type="primary">
                      Today
                    </Button>
                  </div>
                }
                avatar={{
                  src: "https://avatars1.githubusercontent.com/u/8186664?s=460&v=4",
                }}
              ></PageHeader>
            </div>
            <Row gutter={[16, 16]} style={{ marginTop: "15px" }}>
              <Col>
                <Card>
                  <Statistic title="Today" value={"1 Hour 2 Minutes"} />
                </Card>
              </Col>

              <Col>
                <Card>
                  <Statistic title="Idle" value={"29 Minutes"} />
                </Card>
              </Col>
              <Col>
                <Card>
                  <Statistic title="Keystrokes" value={10000} />
                </Card>
              </Col>
              <Col>
                <Card>
                  <Statistic title="Performance" value={"55%"} />
                </Card>
              </Col>
            </Row>

            <div
              className="site-layout-background"
              style={{
                padding: 24,

                minHeight: "calc(100vh - 120px)",
                marginTop: "15px",
              }}
            >
              {children}
            </div>
          </Content>
          <Footer />
        </Layout>
      </Layout>
    </StyledLayout>
  );
}
