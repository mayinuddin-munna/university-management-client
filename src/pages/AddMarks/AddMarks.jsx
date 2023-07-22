import React, { useState } from "react";

const AddMarks = () => {
  const [formData, setFormData] = useState({
    Roll: "",
    Department: "",
    Subject: "",
    Semester: "",
    Session: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here, e.g., sending data to a server or storing in state.
    console.log(formData);
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="w-80 max-w-lg mx-auto mt-8 p-4 bg-gray-100 shadow-md rounded-lg"
      >
        <div className="mb-4">
          <label htmlFor="roll" className="block text-gray-700 font-semibold">
            Roll
          </label>
          <input
            type="text"
            name="Roll"
            id="roll"
            value={formData.Roll}
            onChange={handleChange}
            className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:border-indigo-600"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="department"
            className="block text-gray-700 font-semibold"
          >
            Department
          </label>
          <input
            type="text"
            name="Department"
            id="department"
            value={formData.Department}
            onChange={handleChange}
            className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:border-indigo-600"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="subject"
            className="block text-gray-700 font-semibold"
          >
            Subject
          </label>
          <input
            type="text"
            name="Subject"
            id="subject"
            value={formData.Subject}
            onChange={handleChange}
            className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:border-indigo-600"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="semester"
            className="block text-gray-700 font-semibold"
          >
            Semester
          </label>
          <input
            type="text"
            name="Semester"
            id="semester"
            value={formData.Semester}
            onChange={handleChange}
            className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:border-indigo-600"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="session"
            className="block text-gray-700 font-semibold"
          >
            Session
          </label>
          <input
            type="text"
            name="Session"
            id="session"
            value={formData.Session}
            onChange={handleChange}
            className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:border-indigo-600"
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700"
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default AddMarks;
