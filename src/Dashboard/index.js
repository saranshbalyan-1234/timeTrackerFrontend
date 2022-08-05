import { StyledLayout } from "./style";

import { Layout } from "antd";
import React, { useState } from "react";

import Header from "./Header";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
const { Content } = Layout;
export default function Dashboard({ children }) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <StyledLayout>
      <Layout>
        <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />
        <Layout>
          <Header setCollapsed={setCollapsed} collapsed={collapsed} />
          <Content style={{ margin: "24px 16px 0" }}> {children}</Content>

          <Footer />
        </Layout>
      </Layout>
    </StyledLayout>
  );
}
