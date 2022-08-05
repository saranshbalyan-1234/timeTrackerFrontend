import React from "react";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Layout } from "antd";
import ProfileMenu from "./ProfileMenu";
const { Header } = Layout;

export default function Headers({ setCollapsed, collapsed }) {
  return (
    <Header
      className="site-layout-sub-header-background"
      style={{ padding: 0 }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          paddingTop: "15px",
        }}
      >
        {React.createElement(
          collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
          {
            className: "trigger iconWhite",
            onClick: () => setCollapsed(!collapsed),
          }
        )}
        <ProfileMenu />
      </div>
    </Header>
  );
}
