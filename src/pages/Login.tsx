import { Button } from "antd";
import { FieldValues, useForm } from "react-hook-form";
import { useLoginMutation } from "../redux/features/auth/authApi";
import { useAppDispatch } from "../redux/features/hooks";
import { setUser } from "../redux/features/auth/authSlice";
import { verifyToken } from "../utils/verifyToken";

const Login = () => {
  const dispatch = useAppDispatch();
  const { register, handleSubmit } = useForm({
    defaultValues: {
      id: "1234",
      password: "admin1234",
    },
  });

  const [login, { isLoading }] = useLoginMutation();

  const onSubmit = async (data: FieldValues) => {
    const userInfo = {
      id: data.id,
      password: data.password,
    };
    const res = await login(userInfo).unwrap();
    const user = verifyToken(res.data.accessToken);

    dispatch(setUser({ user: user, token: res.data.accessToken }));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="id"></label>
        <input type="text" id="id" {...register("id")} />
      </div>
      <div>
        <label htmlFor="password"></label>
        <input type="text" id="password" {...register("password")} />
      </div>
      <Button htmlType="submit" disabled={isLoading}>
        LOGIN
      </Button>
    </form>
  );
};

export default Login;
