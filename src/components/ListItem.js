import React from "react";
import classes from "./ListItem.module.css";

function ListItem({ data, contentLength }) {
  let fixedPopulation;

  if (data.population > 10000 && data.population < 1000000) {
    fixedPopulation = data.population / 1000;
  }
  if (data.population > 1000000 && data.population < 10000000) {
    fixedPopulation = data.population / 100000;
  }

  return (
    <div
      className={classes.listItem}
      style={{ background: `${data.totalCases < 100 ? "#eaf7d5" : ""}` }}
    >
      <h2 className={classes.countryName} data-content={contentLength}>
        {data.name}
      </h2>
      <h2>{data.totalCases.toString().replace(/(.)(?=(\d{3})+$)/g, "$1,")}</h2>
      <h2 style={{ backgroundColor: `${data.newCases > 0 ? "#FFEEAA" : ""}` }}>
        {data.newCases.toString().replace(/(.)(?=(\d{3})+$)/g, "$1,")}
      </h2>
      <h2>{data.totalDeaths.toString().replace(/(.)(?=(\d{3})+$)/g, "$1,")}</h2>
      <h2
        style={{
          color: `${data.newDeaths > 0 ? "white" : "black"}`,
          backgroundColor: `${data.newDeaths > 0 ? "#d20a0a" : ""}`,
        }}
      >
        {data.newDeaths.toString().replace(/(.)(?=(\d{3})+$)/g, "$1,")}
      </h2>
      <h2>
        {data.totalRecovered.toString().replace(/(.)(?=(\d{3})+$)/g, "$1,")}
      </h2>
      <h2
        style={{
          color: `${data.newRecovered > 0 ? "white" : "black"}`,
          backgroundColor: `${data.newRecovered > 0 ? "#74cf78" : ""}`,
        }}
      >
        {data.newRecovered.toString().replace(/(.)(?=(\d{3})+$)/g, "$1,")}
      </h2>
      <h2>{data.activeCases.toString().replace(/(.)(?=(\d{3})+$)/g, "$1,")}</h2>
      <h2>
        {data.seriousCritical.toString().replace(/(.)(?=(\d{3})+$)/g, "$1,")}
      </h2>
      <h2>{data.tests.toString().replace(/(.)(?=(\d{3})+$)/g, "$1,")}</h2>
      <h2>{data.cases1M.toString().replace(/(.)(?=(\d{3})+$)/g, "$1,")}</h2>
      <h2>{data.deaths1M.toString().replace(/(.)(?=(\d{3})+$)/g, "$1,")}</h2>
      <h2>{data.tests1M.toString().replace(/(.)(?=(\d{3})+$)/g, "$1,")}</h2>
      <h2 style={{ color: "#337ab7" }}>
        {data.population.toString().replace(/(.)(?=(\d{3})+$)/g, "$1,")}
      </h2>
    </div>
  );
}

export default ListItem;
