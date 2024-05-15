import React from "react";
import { useDispatch } from "react-redux";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { toast } from "react-toastify";
import { Form, Input, Button, Typography } from "antd"; // Import Form, Input, Button from antd
import { login } from "../Redux/Actions/UserAction";
import { useNavigate } from "react-router-dom";
const RegisterPage = () => {
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const Text = Typography;
  // Get the form instance

  const onFinish = (values) => {
    toast("Register successfully", {
      position: "top-right",
      type: "success",
      autoClose: true,
    });

    const user = {
      username: values.username,
      password: values.password,
    };
    dispatch(login(user));
    form.resetFields();
    navigate("/logIn");
  };

  return (
    <div className="flex justify-center items-center h-screen bg-[#F0F0F0]">
      <div className="bg-white p-10 border border-gray-300 w-96">
        <Form
          form={form} // Set the form instance
          name="register"
          onFinish={onFinish}
          layout="vertical" // Set form layout
        >
          <Text className="font-medium">Username</Text>
          <Form.Item
            name="username"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input
              maxLength={25}
              prefix={<UserOutlined className="site-form-item-icon" />}
            />
          </Form.Item>
          <Text className="font-medium">Password</Text>
          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password
              maxLength={25}
              prefix={<LockOutlined className="site-form-item-icon" />}
            />
          </Form.Item>
          <Text className="font-medium">Confirm Password</Text>
          <Form.Item
            name="confirmPassword"
            dependencies={["password"]}
            rules={[
              { required: true, message: "Please confirm your password!" },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    new Error(
                      "The two passwords that you entered do not match!"
                    )
                  );
                },
              }),
            ]}
          >
            <Input.Password
              maxLength={25}
              prefix={<LockOutlined className="site-form-item-icon" />}
            />
          </Form.Item>
          <Form.Item className="flex justify-center !m-0">
            <Button
              type="primary"
              htmlType="submit"
              className="w-52 rounded-none text-white bg-black"
            >
              Register
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default RegisterPage;
