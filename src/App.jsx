import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { LandingPage } from "./pages/landingPage/landingPage";
import "./App.css";
import { SignUpPage } from "./pages/signUpPage/signUp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },

  {
    path: "/signup",
    element: <SignUpPage />,
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
