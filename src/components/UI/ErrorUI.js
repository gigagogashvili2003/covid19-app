import classes from "./ErrorUI.module.css";
const ErrorUI = () => {
  return (
    <div className={classes.errorContainer}>
      <h1>Something Went Wrong!</h1>
      <button type="submit">Back To Home</button>
    </div>
  );
};

export default ErrorUI;
