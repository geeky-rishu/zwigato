import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();

  return (
    <div className="error">
      <img
        className="error-image"
        src="/images/errorImage.jpg"
        alt="Error 404"
      />
      <h1 className="error-message">Page Not Found</h1>
      <p className="error-description">
        Sorry, the page you are looking for does not exist.
      </p>
      <p className="error-details">
        {error.status} : {error.statusText}
      </p>
    </div>
  );
};
export default Error;
