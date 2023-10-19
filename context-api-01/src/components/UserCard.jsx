import React, { useContext } from "react";
import UserContext from "../context/userContext";

function UserCard() {
  const { user } = useContext(UserContext);

  return (
    <div>
      <h1>{`Logged in user: ${user?.username}`}</h1>`
    </div>
  );
}

export default UserCard;
