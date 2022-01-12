import classes from "./Header.module.css";
const Header = () => {
  return (
    <div className={classes.header}>
      <span>#</span>
      <h2 className={classes.country}>Country</h2>
      <h2>Total Cases</h2>
      <h2>New Cases</h2>
      <h2>Total Deaths</h2>
      <h2>New Deaths</h2>
      <h2>
        Total <br /> Recovered
      </h2>
      <h2>
        New <br /> Recovered
      </h2>
      <h2>
        Active <br /> Cases
      </h2>
      <h2>
        Serious <br /> Critical
      </h2>
      <h2>Total Tests</h2>
      <h2>
        Cases <br />/ 1M pop
      </h2>
      <h2>
        Deaths <br />/ 1M pop
      </h2>
      <h2>
        Tests <br />/ 1M pop
      </h2>
      <h2>Population</h2>
    </div>
  );
};

export default Header;
