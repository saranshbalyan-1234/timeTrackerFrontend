import React from "react";
import { connect } from "react-redux";
import { UserOutlined, LogoutOutlined, EditOutlined } from "@ant-design/icons";
import { Avatar, Dropdown, Menu } from "antd";
import { logout } from "../../Redux/Actions/auth";
const ProfileMenu = ({ logout }) => {
  const menu = (
    <Menu
      items={[
        {
          label: (
            <>
              <EditOutlined style={{ marginRight: "5px" }} />
              Edit Profile
            </>
          ),
          key: "0",
          // onClick: logout,
        },
        {
          label: (
            <>
              <LogoutOutlined style={{ marginRight: "5px" }} /> Logout
            </>
          ),
          key: "1",
          onClick: logout,
        },
      ]}
    />
  );

  return (
    <Dropdown overlay={menu} trigger={["hover"]}>
      <Avatar
        style={{
          marginRight: "15px",
          backgroundColor: "white",
          color: "#001529",
        }}
        size={32}
        icon={<UserOutlined />}
      />
    </Dropdown>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = { logout };

export default connect(mapStateToProps, mapDispatchToProps)(ProfileMenu);
