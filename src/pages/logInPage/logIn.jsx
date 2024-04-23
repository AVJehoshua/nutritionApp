import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"


export const LogInPage = () => {
  document.title = "Log In";


  const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [isSignedIn, setIsSignedIn] = useState(false);
    const navigate = useNavigate();


    useEffect(() => {
        console.log("current signed in status: ", isSignedIn)
    },[isSignedIn])


    // checks for valid email
    function isValidEmail(email) {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailRegex.test(email);
    }

    // checks for valid password
    function isValidPassword(password) {
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        return passwordRegex.test(password);
    }

    // handles submit
    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log("initial isSignedIn status: ", isSignedIn)
        console.log("submitting form");

        if (!isValidEmail(email)) {
            console.log("Unable to validate email");
            alert("Inavlid Email!")
            return setErrorMessage("Invalid email address");
        }

        if (!isValidPassword(password)) {
            console.log("Unable to validate password");
            alert("Invalid Password!")
            return setErrorMessage("Invalid password!");
        }

        try {
            console.log("Form successfully submitted to B/E")
            const payload = {
                email: email,
                password: password,
            };
            
            // const response = await logInUser(payload.email, payload.password) TODO -> Create log in user authentication service
          
            console.log("server response:", response)

            if (response.ok) {
                console.log("redirecting to homepage");
                console.log("sign in status change -> true")
                navigate("/home");
                setIsSignedIn(true)
            } else if (response.status === 409) {
                setErrorMessage("Email already in use");
            } else {
                navigate("/signup");
                console.error("Server error:", response.statusText);
            }
        } catch (err) {
            navigate("/signup");
            console.error("error occurred:", err);
        }
    };

    return (
        <>

        <h1> Log in Page</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="email"> <span> Email </span></label>
                    <input
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Enter email"
                        value={email}  // Bind the value of the input to the email state
                        onChange={(e) => setEmail(e.target.value)}  // Update the email state when input changes
                    />
                </div>
                <br></br>
                <div className="form-group">
                    <label htmlFor="password"> <span> Password </span></label>
                    <input
                        type="password"
                        className="form-control"
                        id="exampleInputPassword1"
                        placeholder="Password"
                        value={password}  // Bind the value of the input to the password state
                        onChange={(e) => setPassword(e.target.value)}  // Update the password state when input changes
                    />
                </div>
                <br></br>
                <button type="submit" className="btn btn-primary"> Submit </button>
            </form>
        </>
    );
};
