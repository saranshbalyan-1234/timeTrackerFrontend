import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { StyledLayout } from "./style";
import { Layout, Menu } from "antd";
import React, { useState } from "react";
import HomePage from ".";

const { Header, Sider, Content, Footer } = Layout;
export default function Dashboard() {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <StyledLayout>
      <Layout>
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
        <Layout>
          <Header
            className="site-layout-sub-header-background"
            style={{ padding: 0 }}
          >
            {React.createElement(
              collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
              {
                className: "trigger iconWhite",
                onClick: () => setCollapsed(!collapsed),
              }
            )}
          </Header>

          <Content style={{ margin: "24px 16px 0" }}>
            <div
              className="site-layout-background"
              style={{ padding: 24, minHeight: 360 }}
            >
              <HomePage />
            </div>
          </Content>

          <Content style={{ margin: "24px 16px 24px" }}>
            <div
              className="site-layout-sub-header-background"
              style={{
                padding: 24,
                minHeight: 50,
                color: "white",
                textAlign: "center",
              }}
            >
              Designed By SaranCe
            </div>
          </Content>
        </Layout>
      </Layout>
    </StyledLayout>
  );
}
