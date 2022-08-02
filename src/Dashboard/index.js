import { StyledLayout } from "./style";
import { HomeOutlined, UserOutlined } from "@ant-design/icons";
import { Layout, Breadcrumb } from "antd";
import React, { useState } from "react";
import { HashRouter, Link, Route, Routes, useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
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
                padding: 24,
                minHeight: 360,
                minHeight: "calc(100vh - 135px)",
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
