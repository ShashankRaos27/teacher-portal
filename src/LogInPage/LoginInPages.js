import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Form, Input, Typography } from "antd";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const LoginInPage = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const Text = Typography;
  const user = useSelector((state) => {
    return state.auth.user;
  });
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const onFinish = (values) => {
    if (user && user !== undefined) {
      if (
        user.userDetails.username === userName &&
        user.userDetails.password === password
      ) {
        toast("Login successfully", {
          position: "top-right",
          type: "success",
          autoClose: true,
        });
        navigate("/studentList");
      } else {
        toast("Login failed", {
          position: "top-right",
          type: "error",
          autoClose: true,
        });
      }
    }
    // dispatch(login(values.username, values.password));

    form.resetFields();
  };

  return (
    <div className="flex justify-center items-center h-screen bg-[#F0F0F0]">
      <div className="bg-white p-10 border border-gray-300 w-96">
        <Form
          form={form}
          name="normal_login"
          className="login-form"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          autoComplete="off"
        >
          <Text className="font-medium">Username</Text>
          <Form.Item
            name="username"
            maxLength={25}
            rules={[
              {
                required: true,
                message: "Please input your Username!",
              },
            ]}
          >
            <Input
              value={userName}
              maxLength={25}
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Please enter your username"
              onChange={(e) => setUserName(e.target.value)}
            />
          </Form.Item>
          <Text className="font-medium">Password</Text>
          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password
              value={password}
              prefix={<LockOutlined className="site-form-item-icon" />}
              placeholder="Please enter your password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Item>

          <a
            className="login-form-forgot flex justify-end text-blue-400 font-medium mb-2"
            href="/"
          >
            Forgot password?
          </a>

          <Form.Item className="flex justify-center !m-0">
            <Button
              type="primary"
              htmlType="submit"
              className="w-52 rounded-none text-white bg-black"
            >
              Log in
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default LoginInPage;
