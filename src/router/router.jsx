import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/index";
import RegisterBook from "../pages/RegisterBook";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/registerBook",
    element: <RegisterBook />
  }
]);

export default router;
