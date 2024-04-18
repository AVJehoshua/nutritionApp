// import { l } from "vite/dist/node/types.d-aGj9QkWt";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

export const signUpUser = async (email, password) => {
  const payload = {
    email: email, 
    password: password,
  };

  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload)
  };

  let response = await fetch(`${BACKEND_URL}/users`, requestOptions);

  if (response.status === 201) {
    console.log("User signed up successfully");
    return response;
  } else {
    throw new Error(
      `Received status ${response.status} when signing up. Expected 201.`
    );
  }
};