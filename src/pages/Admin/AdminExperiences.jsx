import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { Modal, Form, Input, TextArea, message } from 'antd';


function AdminExperiences() {
  const dispatch = useDispatch();
  const { portfolioData } = useSelector((state) => state.root);
  const { experiences } = portfolioData;
  const [ showAddEditModal, setShowAddEditModal ] = React.useState(false);
  const [ selectedItemForEdit, setSelectedItemForEdit ] = React.useState(null);
  return (
    <div>
      <div className="grid grid-cols-4 gap-5">
        {experiences.map((experience) => (
          <div className='shadow border p-5 border-gray-400 flex-col' key={experience._id}>
            <h1 className='text-primary text-xl font-bold'>{experience.period}</h1>
            <hr />
            <h1>Company: {experience.company}</h1>
            <h1>Role: {experience.title}</h1>
            <h1>Description: {experience.description}</h1>
            <div className="flex justify-end gap-5 mt-5">
              <button className="px-5 py-2 bg-primary text-white">Edit</button>
              <button className="px-5 py-2 bg-red-500 text-white">Delete</button>
            </div>
          </div>
        ))}
      </div>

      <Modal open={showAddEditModal}
      title={selectedItemForEdit ? "Edit Experience" : "Add Experience"}>
        <Form layout="vertical">
          <Form.Item name="period" label="Period">
            <Input type="text" placeholder="Period"/>
          </Form.Item>
          <Form.Item name="company" label="Company">
            <Input type="text" placeholder="Company"/>
          </Form.Item>
          <Form.Item name="title" label="Title">
            <Input type="text" placeholder="Title"/>
          </Form.Item>
          <Form.Item name="description" label="Description">
            <Textarea type="text" placeholder="Description"/>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}

export default AdminExperiences;

