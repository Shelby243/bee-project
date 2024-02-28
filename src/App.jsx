/* eslint-disable no-unused-vars */
import { useState } from "react";
import "./App.css";
import { Header, Home, SideBar } from "./components";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  DashBoardLayout,
  Error,
  History,
  HomeLayout,
  Landing,
  Login,
  Register,
  Stats,
} from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "dashboard",
        element: <DashBoardLayout />,
        children: [
          {
            index: true,
            element: <Stats />,
          },
          {
            path: "history",
            element: <History />,
          },
        ],
      },
    ],
  },
]);
function App() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

  const openSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };
  return <RouterProvider router={router} />;
}

export default App;
{
  /**
 <div className="grid-container">
      <Header openSidebar={openSidebar} />
      <SideBar
        openSidebarToggle={openSidebarToggle}
        openSidebar={openSidebar}
      />
      <Home />
    </div>
 */
}
