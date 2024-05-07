// routes.js
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import UserProfile from "./pages/UserProfile";
import ErrorPage from "./pages/ErrorPage";
const routes = [
    {
      path: "/",
      element: <Home />,
      errorElement: <ErrorPage /> // Handle errors or unknown routes for this path
    },
    {
      path: "/about",
      element: <About />,
      errorElement: <ErrorPage /> // Handle errors for the /about path
    },
    {
      path: "/login",
      element: <Login />,
      errorElement: <ErrorPage /> // Handle errors for the /login path
    },
    {
      path: "/profile/:id",
      element: <UserProfile />,
      errorElement: <ErrorPage /> // Handle errors for dynamic /profile/:id path
    }
  ];
  export default routes;
