import React, { useState } from "react";
import { Form, Input, Button, Checkbox, Card, Spin } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { StyledWrapper } from "./style";
import { connect } from "react-redux";
import { signIn } from "../Redux/Actions/auth";

const SignIn = ({ loading, signIn }) => {
  const [details, setDetails] = useState({
    email: "",
    password: "",
  });

  const handleDetails = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    let object = {};
    object[name] = value;
    setDetails({ ...details, ...object });
  };

  return (
    <StyledWrapper>
      <div className="outsideApp">
        <Spin spinning={loading}>
          <Card title="Login" bordered class="shadow">
            <img
              alt="logo"
              src="/Logo/logo2.svg"
              style={{ height: "50px", marginBottom: "10px" }}
            />
            <Form
              name="normal_login"
              className="login-form"
              initialValues={{ remember: true }}
              onFinish={() => {
                signIn(details);
              }}
            >
              <Form.Item
                name="email"
                rules={[
                  { required: true, message: "Please input your Email!" },
                ]}
              >
                <Input
                  type="email"
                  prefix={<UserOutlined className="site-form-item-icon" />}
                  placeholder="Email"
                  name="email"
                  onChange={(e) => {
                    handleDetails(e);
                  }}
                />
              </Form.Item>
              <Form.Item
                name="password"
                rules={[
                  { required: true, message: "Please input your Password!" },
                ]}
              >
                <Input
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  type="password"
                  placeholder="Password"
                  name="password"
                  onChange={(e) => {
                    handleDetails(e);
                  }}
                />
              </Form.Item>
              <Form.Item>
                <Form.Item name="remember" valuePropName="checked" noStyle>
                  <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <Link className="login-form-forgot" to="/password-reset">
                  Forgot password!
                </Link>
              </Form.Item>

              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="login-form-button"
                  style={{ marginRight: "20px" }}
                >
                  Log in
                </Button>
                Or <Link to="/register">Register now!</Link>
              </Form.Item>
            </Form>
          </Card>
        </Spin>
      </div>
    </StyledWrapper>
  );
};
const mapStateToProps = (state) => ({ loading: state.auth.loading });

const mapDispatchToProps = { signIn };

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
