import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const Register = () => {
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { createUser, createProfile } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleRegister = (data) => {
    createUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        createProfile(data.name, data.photo);
        reset();
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });

    createUser(data.email, data.password)
      .then((result) => {
        navigate("/");
        const user = result.user;
        createProfile(data.name, data.photoURL)
          .then(() => {
            const saveUser = {
              name: data.name,
              email: data.email,
              photo: data.photo,
              role: "student",
            };
            fetch("http://localhost:5000/users", {
              method: "POST",
              headers: {
                "content-type": "application/json",
              },
              body: JSON.stringify(saveUser),
            })
              .then((res) => res.json())
              .then((data) => {
                if (data.insertedId) {
                  reset();
                  Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "User SignUp successfully!",
                    showConfirmButton: false,
                    timer: 1500,
                  });
                }
              });
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  return (
    <div className="max-w-md mx-auto mt-8">
      <form onSubmit={handleSubmit(handleRegister)} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-gray-700 font-medium">
            Name
          </label>
          <input
            type="text"
            id="name"
            {...register("name", { required: "Name is required" })}
            className="mt-1 p-2 block w-full rounded-md border border-gray-300"
          />
          {errors.name && <p className="text-red-500">{errors.name.message}</p>}
        </div>
        <div>
          <label htmlFor="photoURL" className="block text-gray-700 font-medium">
            Photo URL
          </label>
          <input
            type="text"
            id="photoURL"
            {...register("photoURL", { required: "Photo URL is required" })}
            className="mt-1 p-2 block w-full rounded-md border border-gray-300"
          />
          {errors.photoURL && (
            <p className="text-red-500">{errors.photoURL.message}</p>
          )}
        </div>
        <div>
          <label htmlFor="email" className="block text-gray-700 font-medium">
            Email
          </label>
          <input
            type="email"
            id="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: "Invalid email address",
              },
            })}
            className="mt-1 p-2 block w-full rounded-md border border-gray-300"
          />
          {errors.email && (
            <p className="text-red-500">{errors.email.message}</p>
          )}
        </div>
        <div>
          <label htmlFor="password" className="block text-gray-700 font-medium">
            Password
          </label>
          <input
            type="password"
            id="password"
            {...register("password", { required: "Password is required" })}
            className="mt-1 p-2 block w-full rounded-md border border-gray-300"
          />
          {errors.password && (
            <p className="text-red-500">{errors.password.message}</p>
          )}
        </div>
        <div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors duration-300"
          >
            Register
          </button>
        </div>
        <label className="">
          Already have an account?{" "}
          <Link to="/login" className="link link-hover font-semibold">
            Log in
          </Link>
        </label>
      </form>
    </div>
  );
};

export default Register;
