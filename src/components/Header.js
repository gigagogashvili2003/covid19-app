import classes from "./Header.module.css";
const Header = () => {
  return (
    <div className={classes.header}>
      <h2 className={classes.country}>Country</h2>
      <h2>Total Cases</h2>
      <h2>New Cases</h2>
      <h2>Total Deaths</h2>
      <h2>New Deaths</h2>
      <h2>Total Recovered</h2>
      <h2>New Recovered</h2>
      <h2>Active Cases</h2>
      <h2>Serious Critical</h2>
      <h2>Total Tests</h2>
      <h2>Cases/ 1M pop</h2>
      <h2>Deaths/ 1M pop</h2>
      <h2>Tests/ 1M pop</h2>
      <h2>Population</h2>
    </div>
  );
};

export default Header;
