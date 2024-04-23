import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { LandingPage } from "./pages/landingPage/landingPage";
import "./App.css";
import { SignUpPage } from "./pages/signUpPage/signUp";
import { LogInPage } from "./pages/logInPage/logIn";

const router = createBrowserRouter([
  {
    path: "/home",
    element: <LandingPage />,
  },

  {
    path: "/signup",
    element: <SignUpPage />,
  },
  {
    path: "/login",
    element: <LogInPage />,
  },
]);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};
export default App;
