import React from "react";

const validation = props => {
  const renderText =
    props.inputLength < 5 ? "Text is too Short" : "Text is not too short";
  return (
    <div>
      <p>{renderText}</p>
    </div>
  );
};

export default validation;
