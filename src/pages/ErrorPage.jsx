// pages/ErrorPage.jsx
import React from "react";
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h1>Oops! Something went wrong.</h1>
      <p>
        {error?.status ? `Error ${error.status}: ${error.statusText}` : "Page not found."}
      </p>
      <a href="/">Go back home</a>
    </div>
  );
};

export default ErrorPage;
