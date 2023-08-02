import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";

const Result = () => {
  const { control, handleSubmit } = useForm();
  const [searchResult, setSearchResult] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const onSubmit = async (data) => {
    try {
      const response = await fetch(
        `https://school-management-du4r.onrender.com/search?roll=${data.rollNumber}&session=${data.session}&semester=${data.semester}`,
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
          <div className="flex justify-center items-center h-screen">
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              onClick={() => setIsPopupOpen(true)}
            >
              Open Popup
            </button>

            {isPopupOpen && (
              <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                <div className="bg-white p-6 rounded shadow-md">
                  {/* Your popup form content */}
                  <h2 className="text-lg font-semibold">Popup Form</h2>
                  <form>
                    {/* Form fields */}
                    {/* ... */}
                    <div className="mt-4 flex justify-end">
                      <button
                        type="button"
                        className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                        onClick={() => setIsPopupOpen(false)}
                      >
                        Close
                      </button>
                      <button
                        type="submit"
                        className="ml-2 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                        onClick={() => {
                          // Handle form submission here
                        }}
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default Result;
