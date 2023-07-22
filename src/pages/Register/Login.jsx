import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  const { userLogin, googleSignUp } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location?.state?.from?.pathname || "/";

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    userLogin(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  const handleGoogleSignIn = () => {
    googleSignUp();
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="bg-white shadow-md rounded-md p-6">
        <h2 className="font-semibold mb-4 text-5xl">Login Form</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="w-96 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
              required
              type="email"
              name="email"
              id="email"
              placeholder="example@example.com"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
              required
              type="password"
              name="password"
              id="password"
              placeholder="********"
            />
          </div>
          <button className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300">
            Log In
          </button>
          <label>
            Don't have an account?{" "}
            <Link to="/register" className="link link-hover font-semibold">
              Sign up
            </Link>
          </label>
        </form>
        <div className="text-center my-2">OR</div>
        <button className="btn w-full mx-auto" onClick={handleGoogleSignIn}>
          Google SigIn
        </button>
      </div>
    </div>
  );
};

export default Login;
