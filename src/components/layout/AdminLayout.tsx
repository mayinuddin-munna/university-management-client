import { Outlet } from "react-router-dom";

const AdminLayout = () => {
  return (
    <div>
      <p>AdminLayout</p>
      <Outlet/>
    </div>
  );
};

export default AdminLayout;
