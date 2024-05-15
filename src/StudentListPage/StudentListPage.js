// StudentListPage component
import React, { useEffect, useState } from "react";
import { Table, Button, Modal, Typography, Form, Input } from "antd";
import { useDispatch, useSelector } from "react-redux";
import {
  addStudent,
  editStudent,
  deleteStudent,
  setStudents,
} from "../Redux/Actions/StudentAction";
import {
  UserOutlined,
  EditOutlined,
  FileTextOutlined,
} from "@ant-design/icons";
import Header from "../Header";

const { Text } = Typography;

const StudentListPage = () => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const students = useSelector((state) => state.student.students);
  const [modalVisible, setModalVisible] = useState(false);
  const [editingStudent, setEditingStudent] = useState(null);
  const [loading, setLoading] = useState(false);
  const [nextId, setNextId] = useState(1); // Initialize ID counter

  const handleAdd = () => {
    form.resetFields();
    setModalVisible(true);
  };

  const handleEdit = () => {
    form.submit();
  };

  const handleDelete = (studentId) => {
    setLoading(true);
    dispatch(deleteStudent(studentId));
    setLoading(false);
  };

  const onFinish = (values) => {
    const updatedValue = {
      id: editingStudent ? editingStudent.id : nextId, // Assign next sequential ID
      ...values,
    };
    setLoading(true);
    dispatch(
      editingStudent ? editStudent(updatedValue) : addStudent(updatedValue)
    );
    setLoading(false);
    setNextId(nextId + 1); // Increment ID counter
    setModalVisible(false);
  };

  const edit = (student) => {
    setEditingStudent(student);
    form.setFieldsValue({
      Name: student.name,
      Subject: student.subject,
      Marks: student.marks,
    });
    setModalVisible(true);
  };

  const closeModal = () => {
    setEditingStudent(null);
    setModalVisible(false);
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text, record) => (
        <div className="flex items-center gap-1">
          <div className="rounded-full w-8 h-8 flex items-center justify-center bg-blue-600 text-white">
            {record.name.charAt(0).toUpperCase()}
          </div>
          {text}
        </div>
      ),
    },
    {
      title: "Subject",
      dataIndex: "subject",
      key: "subject",
    },
    {
      title: "Marks",
      dataIndex: "marks",
      key: "marks",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <div className="flex gap-1 ">
          <Button
            className="rounded-none text-white bg-black"
            onClick={() => edit(record)}
          >
            Edit
          </Button>
          <Button
            className="rounded-none text-white bg-black"
            onClick={() => handleDelete(record.id)}
          >
            Delete
          </Button>
        </div>
      ),
    },
  ];
  const paginationConfig = {
    pageSize: 5,
  };
  return (
    <>
      <Header />
      <div className="flex justify-center items-center h-screen bg-[#F0F0F0]">
        <div className="bg-white p-2 border border-gray-300 w-[75rem]">
          <Table
            dataSource={students}
            columns={columns}
            pagination={paginationConfig}
            scroll={{ x: true }}
          />
          <Button
            className="rounded-none text-white bg-black !mt-3"
            type="primary"
            onClick={handleAdd}
          >
            Add Student
          </Button>
          <Modal
            title={editingStudent ? "Edit Student" : "Add Student"}
            visible={modalVisible}
            onOk={editingStudent ? handleEdit : handleAdd}
            onCancel={closeModal}
            footer={null}
          >
            <div className="p-8">
              <Form form={form} onFinish={onFinish} layout="vertical">
                <Text className="font-medium">Name</Text>
                <Form.Item
                  name="name"
                  rules={[
                    {
                      required: true,
                      message: "Please input the student name!",
                    },
                  ]}
                >
                  <Input
                    maxLength={25}
                    placeholder="Enter student name"
                    prefix={<UserOutlined className="site-form-item-icon" />}
                  />
                </Form.Item>
                <Text className="font-medium">Subject</Text>

                <Form.Item
                  name="subject"
                  maxLength={25}
                  rules={[
                    {
                      required: true,
                      message: "Please input the subject name!",
                    },
                  ]}
                >
                  <Input
                    placeholder="Enter subject name"
                    prefix={
                      <FileTextOutlined className="site-form-item-icon" />
                    }
                  />
                </Form.Item>
                <Text className="font-medium">Marks</Text>
                <Form.Item
                  name="marks"
                  rules={[
                    {
                      required: true,
                      message: "Please input the subject marks!",
                    },
                    {
                      pattern: /^[0-9]+$/,
                      message: "Please enter a valid number for marks!",
                    },
                  ]}
                >
                  <Input
                    maxLength={3}
                    placeholder="Enter subject marks"
                    prefix={<EditOutlined className="site-form-item-icon" />}
                  />
                </Form.Item>
              </Form>

              <div className="flex justify-center ">
                <Button
                  key="submit"
                  type="primary"
                  loading={loading}
                  onClick={handleEdit}
                  className="w-52 rounded-none text-white bg-black"
                >
                  {editingStudent ? "Edit Student" : "Add Student"}
                </Button>
              </div>
            </div>
          </Modal>
        </div>
      </div>
    </>
  );
};

export default StudentListPage;
