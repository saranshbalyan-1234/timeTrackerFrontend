import React from "react";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Layout, Menu } from "antd";
const { Header } = Layout;

export default function Headers({ setCollapsed, collapsed }) {
  return (
    <Header
      className="site-layout-sub-header-background"
      style={{ padding: 0 }}
    >
      {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
        className: "trigger iconWhite",
        onClick: () => setCollapsed(!collapsed),
      })}
    </Header>
  );
}
