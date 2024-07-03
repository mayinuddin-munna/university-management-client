import React from "react";
import { Layout, Menu, MenuProps, theme } from "antd";
import { NavLink, Outlet } from "react-router-dom";

const { Header, Content, Footer, Sider } = Layout;

const items: MenuProps["items"] = [
  {
    key: "dashboard",
    label: <NavLink to="/admin/dashboard">"Dashboard"</NavLink>,
  },
  {
    key: "profile",
    label: "Profile",
  },
  {
    key: "user-management",
    label: "User Management",
    children: [
      {
        key: "create-student",
        label: <NavLink to="create-student">Create Student</NavLink>,
      },
      {
        key: "create-faculty",
        label: <NavLink to="create-admin">Create Faculty</NavLink>,
      },
      {
        key: "create-admin",
        label: <NavLink to="create-admin">Create Admin</NavLink>,
      },
    ],
  },
];

const MainLayout: React.FC = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout style={{ height: "100vh" }}>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div style={{ color: "white", textAlign: "center", height: "3rem" }}>
          <h1>University Management</h1>
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["4"]}
          items={items}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }} />
        <Content style={{ margin: "24px 16px 0" }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <Outlet />
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
