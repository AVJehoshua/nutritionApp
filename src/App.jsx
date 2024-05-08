import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { LandingPage } from "./pages/landingPage/landingPage";
import "./App.css";
import { SignUpPage } from "./pages/signUpPage/signUp";
import YoungerKids from './pages/gamepages/YoungerKids/Youngerkids'
import OlderKids from "./pages/gamepages/OlderKids/OlderKids";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },

  {
    path: "/signup",
    element: <SignUpPage />,
  },
  {
    path: "/youngerkids",
    element: <YoungerKids/>,
  },
  {
    path: "/olderkids",
    element: <OlderKids/>,
  }
]);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};
export default App;
