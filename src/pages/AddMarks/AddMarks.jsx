import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";

const AddMarks = () => {
  const { reset, control, handleSubmit } = useForm();

  const onSubmit = (data) => {
    const name = data.Name;
    const roll = data.Roll;
    const subject = data.Subject;
    const department = data.Department;
    const semester = data.Semester;
    const session = data.Session;
    const Marks = data.Marks;
    const classTest = data.ClassTest;
    const minTerm = data.MinTerm;
    const final = data.Final;

    const result = {
      name,
      roll,
      subject,
      department,
      semester,
      session,
      Marks,
      classTest,
      minTerm,
      final,
    };

    fetch("https://school-management-du4r.onrender.com/admins", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(result),
    })
      .then((res) => res.json())
      .then((data) => {
        reset(), console.log(data);
      });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="">
      <div className="flex mx-auto justify-center">
        <div className="w-full max-w-lg lg:mx-12 mt-8 p-4 bg-gray-100 shadow-md rounded-lg">
          <div className="mb-4">
            <label
              htmlFor="marks"
              className="block text-gray-700 font-semibold"
            >
              Assignment Marks
            </label>
            <Controller
              name="Marks"
              control={control}
              rules={{ required: "Assignment Marks is required" }}
              render={({ field }) => (
                <input
                  type="text"
                  {...field}
                  className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:border-indigo-600"
                />
              )}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="class"
              className="block text-gray-700 font-semibold"
            >
              Class Test
            </label>
            <Controller
              name="ClassTest"
              control={control}
              rules={{ required: "Class Test is required" }}
              render={({ field }) => (
                <input
                  type="text"
                  {...field}
                  className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:border-indigo-600"
                />
              )}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="minTerm"
              className="block text-gray-700 font-semibold"
            >
              Min Term
            </label>
            <Controller
              name="MinTerm"
              control={control}
              rules={{ required: "Min Term is required" }}
              render={({ field }) => (
                <input
                  type="text"
                  {...field}
                  className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:border-indigo-600"
                />
              )}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="final"
              className="block text-gray-700 font-semibold"
            >
              Final Exam
            </label>
            <Controller
              name="Final"
              control={control}
              rules={{ required: "Final Exam is required" }}
              render={({ field }) => (
                <input
                  type="text"
                  {...field}
                  className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:border-indigo-600"
                />
              )}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-semibold">
              Name
            </label>
            <Controller
              name="Name"
              control={control}
              rules={{ required: "Name is required" }}
              render={({ field }) => (
                <input
                  type="text"
                  {...field}
                  className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:border-indigo-600"
                />
              )}
            />
          </div>
        </div>
        <div className="w-full max-w-lg lg:mx-12 mt-8 p-4 bg-gray-100 shadow-md rounded-lg">
          <div className="mb-4">
            <label htmlFor="roll" className="block text-gray-700 font-semibold">
              Roll
            </label>
            <Controller
              name="Roll"
              control={control}
              rules={{ required: "Roll is required" }}
              render={({ field }) => (
                <input
                  type="text"
                  {...field}
                  className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:border-indigo-600"
                />
              )}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="subject"
              className="block text-gray-700 font-semibold"
            >
              Subject
            </label>
            <Controller
              name="Subject"
              control={control}
              rules={{ required: "Name is required" }}
              render={({ field }) => (
                <input
                  type="text"
                  {...field}
                  className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:border-indigo-600"
                />
              )}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="department"
              className="block text-gray-700 font-semibold"
            >
              Department
            </label>
            <Controller
              name="Department"
              control={control}
              rules={{ required: "Department is required" }}
              render={({ field }) => (
                <select
                  {...field}
                  className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:border-indigo-600"
                >
                  <option value="">Select Department</option>
                  <option value="CSE">CSE</option>
                  <option value="ECE">ECE</option>
                  <option value="BBA">BBA</option>
                </select>
              )}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="semester"
              className="block text-gray-700 font-semibold"
            >
              Semester
            </label>
            <Controller
              name="Semester"
              control={control}
              rules={{ required: "Semester is required" }}
              render={({ field }) => (
                <select
                  {...field}
                  className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:border-indigo-600"
                >
                  <option>Select Semester</option>
                  <option value="1">1st Semester</option>
                  <option value="2">2nd Semester</option>
                  <option value="3">3rd Semester</option>
                  <option value="4">4th Semester</option>
                  <option value="5">5th Semester</option>
                  <option value="6">6th Semester</option>
                  <option value="7">7th Semester</option>
                  <option value="8">8th Semester</option>
                </select>
              )}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="session"
              className="block text-gray-700 font-semibold"
            >
              Session
            </label>
            <Controller
              name="Session"
              control={control}
              rules={{ required: "Session is required" }}
              render={({ field }) => (
                <input
                  type="text"
                  {...field}
                  className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:border-indigo-600"
                />
              )}
            />
          </div>
        </div>
      </div>
      <button
        type="submit"
        className="w-full py-2 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700"
      >
        Add Marks
      </button>
    </form>
  );
};

export default AddMarks;
