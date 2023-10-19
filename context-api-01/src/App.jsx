import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import LoginForm from "./components/LoginForm";
import UserCard from "./components/UserCard";
import UserContextProvider from "./context/UserContextProvider";

function App() {
  return (
    <UserContextProvider>
      <h1>Login Page</h1>
      <LoginForm />
      <UserCard />
    </UserContextProvider>
  );
}

export default App;
