import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";

const Result = () => {
  const { control, handleSubmit } = useForm();
  const [searchResult, setSearchResult] = useState(null);
  console.log(searchResult);

  const onSubmit = async (data) => {
    try {
      const response = await fetch(
        `http://localhost:5000/search?roll=${data.rollNumber}&session=${data.session}&semester=${data.semester}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const responseData = await response.json();
      setSearchResult(responseData);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-md mx-auto mt-8 p-6 border border-gray-300 rounded-lg shadow-lg"
      >
        <div className="mb-4">
          <label
            htmlFor="rollNumber"
            className="block text-gray-700 font-bold mb-2"
          >
            Roll Number
          </label>
          <Controller
            name="rollNumber"
            control={control}
            render={({ field }) => (
              <input
                {...field}
                type="text"
                id="rollNumber"
                placeholder="Enter your Roll number"
                className="w-full border border-gray-300 p-2 rounded"
              />
            )}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="session"
            className="block text-gray-700 font-bold mb-2"
          >
            Session
          </label>
          <Controller
            name="session"
            control={control}
            render={({ field }) => (
              <input
                {...field}
                type="text"
                id="session"
                placeholder="Enter your session"
                className="w-full border border-gray-300 p-2 rounded"
              />
            )}
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="semester"
            className="block text-gray-700 font-bold mb-2"
          >
            Semester
          </label>
          <Controller
            name="semester"
            control={control}
            render={({ field }) => (
              <input
                {...field}
                type="text"
                id="semester"
                placeholder="Enter your semester"
                className="w-full border border-gray-300 p-2 rounded"
              />
            )}
          />
        </div>
        <button
          type="submit"
          className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Submit
        </button>
      </form>
      <div className="container mx-auto mt-8">
        {searchResult && (
          <div className="mt-4">
            <p className="text-lg">Roll: {searchResult.roll}</p>
            <p className="text-lg">Session: {searchResult.session}</p>
            <p className="text-lg">Semester: {searchResult.semester}st</p>
            <p className="text-lg">Semester: {searchResult.subject}</p>
            <p className="text-lg">Subject: {searchResult.subject}</p>
            <p className="text-lg">Assignment Marks: {searchResult.Marks}</p>
            <p className="text-lg">Class Test: {searchResult.classTest}</p>
            <p className="text-lg">Mid Term: {searchResult.minTerm}</p>
            <p className="text-lg">Final: {searchResult.final}</p>
            <h4>
              Total Marks: {" "}
              {(
                searchResult.Marks +
                searchResult.classTest +
                searchResult.minTerm +
                searchResult.final
              ).toFixed(2)}
            </h4>
          </div>
        )}
      </div>
    </>
  );
};

export default Result;
