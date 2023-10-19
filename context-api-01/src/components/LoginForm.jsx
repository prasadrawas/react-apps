import React, { useContext, useState } from "react";
import UserContext from "../context/userContext";

function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { setUser } = useContext(UserContext);

  const submitForm = (e) => {
    e.preventDefault();
    setUser({
      username: username,
      password: password,
    });
  };

  return (
    <div>
      <input
        type="text"
        name=""
        id=""
        placeholder="enter username"
        onChange={(e) => setUsername(e.target.value)}
      />
      <br />
      <input
        type="text"
        name=""
        id=""
        placeholder="enter username"
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <input type="submit" value="Submit" onClick={(e) => submitForm(e)} />
    </div>
  );
}

export default LoginForm;
