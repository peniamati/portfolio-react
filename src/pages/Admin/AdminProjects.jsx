import React from "react";
import { Form, Input, message } from "antd";
import TextArea from "antd/es/input/TextArea";
import { useDispatch, useSelector } from "react-redux";
import { HideLoading, ShowLoading } from "../../redux/rootSlice";
import axios from "axios";

function AdminAbout() {
  const dispatch = useDispatch();
  const { portfolioData } = useSelector((state) => state.root);

  const onFinish = async (values) => {
    try {
      dispatch(ShowLoading());
      const response = await axios.post(
        "http://peniamatias.alwaysdata.net/api/portfolio/update-projects",
        {
          ...values,
          _id: portfolioData.projects._id,
        }
      );
      dispatch(HideLoading());
      if (response.data.success) {
        message.success(response.data.message);
      } else {
        message.error(response.data.message);
      }
    } catch (error) {
      dispatch(HideLoading());
      message.error(error.response.data.message);
    }
  };

  return (
    <div>
      <Form
        onFinish={onFinish}
        layout="vertical"
        initialValues={portfolioData.projects}
      >
        <Form.Item
          name="projects"
          label="Projects"
          rules={[
            {
              required: true,
              message: "Please enter your projects",
            },
          ]}
        >
          <TextArea
            rows={4}
            placeholder="Enter your projects"
            name="projects"
          />
        </Form.Item>
        <Form.Item>
          <div className="flex justify-end">
            <button
              className="px-10 py-2 bg-primary text-white"
              type="primary"
              htmlType="submit"
            >
              Save
            </button>
          </div>
        </Form.Item>
      </Form>
    </div>
  );
}

export default AdminAbout;