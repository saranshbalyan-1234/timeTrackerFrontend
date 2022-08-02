import React from "react";
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";
const { Sider } = Layout;
export default function Sidebar({ collapsed, setCollapsed }) {
  return (
    <Sider
      trigger={null}
      collapsible
      collapsed={collapsed}
      breakpoint="lg"
      // collapsedWidth="0"
      onBreakpoint={(broken) => {
        console.log(broken);
      }}
      onCollapse={(collapsed, type) => {
        setCollapsed(collapsed);
      }}
    >
      {collapsed ? (
        <img
          src="/iconlogo.svg"
          className="logo"
          style={{
            height: "20px",
            width: "50px",
            marginTop: collapsed && "26px",
          }}
        />
      ) : (
        <img
          src="/logo.svg"
          className="logo"
          style={{ height: "35px", width: "150px" }}
        />
      )}
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["4"]}
        items={[
          UserOutlined,
          VideoCameraOutlined,
          UploadOutlined,
          UserOutlined,
        ].map((icon, index) => ({
          key: String(index + 1),
          icon: React.createElement(icon),
          label: `nav ${index + 1}`,
        }))}
      />
    </Sider>
  );
}