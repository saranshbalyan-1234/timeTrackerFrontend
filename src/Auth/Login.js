import React, { useState } from "react";
import { Form, Input, Button, Checkbox, Card, Spin, message } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { StyledWrapper } from "./style";
import { api_base_url } from "../Utils/constants";
import { getError } from "../Utils/error";
const Login = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [details, setDetails] = useState({
    email: "",
    password: "",
  });
  const onLogin = () => {
    setLoading(true);
    axios
      .post(api_base_url + "/auth/login", details)
      .then((res) => {
        const { id, name, email, accessToken, refreshToken } = res.data;
        message.success("Logged In Successfully");
        localStorage.setItem("accessToken", accessToken);
        localStorage.setItem("refreshToken", refreshToken);
        localStorage.setItem("user", { id, name, email });
        navigate("/");
        setLoading(false);
      })
      .catch((err) => {
        getError(err);
        setLoading(false);
      });
  };
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
              src="/Logo/logo2.svg"
              style={{ height: "50px", marginBottom: "10px" }}
            />
            <Form
              name="normal_login"
              className="login-form"
              initialValues={{ remember: true }}
              onFinish={onLogin}
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

                <a className="login-form-forgot" href="">
                  Forgot password
                </a>
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
export default Login;
