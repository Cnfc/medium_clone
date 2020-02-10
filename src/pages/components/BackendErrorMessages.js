import React from "react";

const BackendErrorMessages = ({ backendErrors }) => {
  console.log(backendErrors);
  const errorMessages = Object.keys(backendErrors).map(item => {
    const messages = backendErrors[item].join(" ");
    return `${item} ${messages}`;
  });
  return (
    <ul className="error-messages">
      {errorMessages.map(errorMessage => (
        <li key={errorMessage}>{errorMessage}</li>
      ))}
    </ul>
  );
};

export default BackendErrorMessages;
