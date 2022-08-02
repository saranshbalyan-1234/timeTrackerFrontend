import React from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Layout, Avatar } from "antd";
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
          paddingTop: "10px",
        }}
      >
        {React.createElement(
          collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
          {
            className: "trigger iconWhite",
            onClick: () => setCollapsed(!collapsed),
          }
        )}
        <Avatar
          style={{
            marginRight: "15px",
            backgroundColor: "white",
            color: "#001529",
          }}
          size={{ xs: 12, sm: 16, md: 20, lg: 32, xl: 40, xxl: 50 }}
          icon={<UserOutlined />}
        />
      </div>
    </Header>
  );
}
