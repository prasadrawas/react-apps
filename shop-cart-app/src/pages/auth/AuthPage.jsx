import React, { useState } from "react";
import {
  LoginForm,
  LoginHero,
  SignUpForm,
} from "../../features/auth/components";

function AuthPage({ path }) {
  const [pagePath, setPath] = useState(path);

  const handleLoginPressed = () => {
    setPath("login");
  };

  const handleSignUpPressed = () => {
    setPath("register");
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <LoginHero />

      {pagePath === "login" ? (
        <LoginForm onSignUpPressed={handleSignUpPressed} />
      ) : (
        <SignUpForm onLoginPressed={handleLoginPressed} />
      )}
    </div>
  );
}

export default AuthPage;
