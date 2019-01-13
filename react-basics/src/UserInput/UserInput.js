import React from "react";

const userInput = props => {
  return (
    <div>
      Enter username here:
      <input
        type="text"
        onChange={props.usernameChanged}
        value={props.username}
      />
    </div>
  );
};

export default userInput;
