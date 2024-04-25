import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../services/authentication";

export const LogInPage = () => {
  document.title = "Log In";
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const navigate = useNavigate();

  let timer;

  if (loginError) {
    timer = setTimeout(() => {
      setLoginError("");
    setLoginError("");
    }, 3000)
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const token = await loginUser(email, password);
      window.localStorage.setItem("token", token[0]);
      window.localStorage.setItem("id", token[1])
      navigate("/")
    } catch (err) {
      console.error(err);
      if (err.message === "Received status 401 when logging in. Expected 201") {
        setLoginError("User not found. Please try again or create an account.");
      } else if (err.message === "Received status 403 when logging in. Expected 201") {
        setLoginError("Invalid password, please try again.");
      } else {
        setLoginError("An unexpected error occurred. Please try again later.");
      }
    }
  }

  return (
    <>
      <h1> Log in Page</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">
            {" "}
            <span> Email </span>
          </label>
          <input
            type="text"
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            value={email} // Bind the value of the input to the email state
            onChange={(e) => setEmail(e.target.value)} // Update the email state when input changes
          />
        </div>
        <br></br>
        <div className="form-group">
          <label htmlFor="password">
            {" "}
            <span> Password </span>
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Password"
            value={password} // Bind the value of the input to the password state
            onChange={(e) => setPassword(e.target.value)} // Update the password state when input changes
          />
        </div>
        <br></br>
        <button type="submit" className="btn btn-primary">
          {" "}
          Submit{" "}
        </button>
      </form>
    </>
  );
};
