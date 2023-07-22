import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useAdmin from "../hooks/useAdmin";

const Dashboard = () => {
  //   const [isAdmin] = useAdmin();
  const { user, loading } = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  const student = (
    <div className="p-6">
      <div className="avatar my-4">
        <div className="mx-auto w-24">
          <img src={user.photoURL} className="rounded-full" />
        </div>
      </div>
      <div className="mb-4">
        Welcome, <br /> {user.displayName}
      </div>
      <ul className="mt-6">
        <li>
          <NavLink
            to="/dashboard/result"
            className={({ isActive }) =>
              isActive ? "dashboard-active" : "dashboard-default"
            }
          >
            Result
          </NavLink>
        </li>
        <li className="border-b-4 border-indigo-500 my-8" />
        <li className="mb-2 mt-2">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "dashboard-active" : "dashboard-default"
            }
          >
            Go Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/books"
            className={({ isActive }) =>
              isActive ? "dashboard-active" : "dashboard-default"
            }
          >
            Books
          </NavLink>
        </li>
      </ul>
    </div>
  );

  {/* ----------Admin------------ */}
  const admin = (
    <div className="p-6">
      <div className="avatar my-4">
        <div className="mx-auto w-24">
          <img src={user.photoURL} className="rounded-full" />
        </div>
      </div>
      <div className="mb-4">
        Welcome, <br />
        {user.displayName}
      </div>
      <ul className="mt-6">
        <li>
          <NavLink
            to="/dashboard/addMarks"
            className={({ isActive }) =>
              isActive ? "dashboard-active" : "dashboard-default"
            }
          >
            Add Result
          </NavLink>
        </li>
        <li className="border-b-4 border-indigo-500 my-8" />
        {/* <li className="text-small">Back to,</li> */}
        <li className="mb-2 mt-2">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "dashboard-active" : "dashboard-default"
            }
          >
            Go Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/books"
            className={({ isActive }) =>
              isActive ? "dashboard-active" : "dashboard-default"
            }
          >
            Books
          </NavLink>
        </li>
      </ul>
    </div>
  );

  return (
    <div className="relative">
      <button
        onClick={toggleDrawer}
        className="fixed z-10 top-4 right-4 md:hidden text-white bg-blue-500 rounded-full p-2 shadow-md hover:bg-blue-600 transition-colors"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </button>
      <div className="lg:ml-80 md:ml-80 my-24 px-24">
        <Outlet />
      </div>
      <div
        className={`${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 fixed z-20 top-0 left-0 w-64 md:w-80 h-full bg-blue-600 text-white p-4 shadow-lg transition-transform duration-300 ease-in-out`}
      >
        {student}
      </div>
      {isOpen && (
        <div
          className="md:hidden fixed z-10 top-0 left-0 w-full h-full bg-black opacity-50"
          onClick={toggleDrawer}
        />
      )}
    </div>
  );
};

export default Dashboard;
