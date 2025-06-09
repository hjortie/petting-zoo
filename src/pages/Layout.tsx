import { NavLink, Outlet } from "react-router";

export const Layout = () => {
  return (
    <>
      <header>
        <NavLink to="/">Hem</NavLink>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};
