import { useEffect } from "react";
import List from "./components/List";
import ListItem from "./components/ListItem";
import { fetchData } from "./store/covid19Actions";
import { useSelector, useDispatch } from "react-redux";

import Header from "./components/Header";
import Spinner from "./components/UI/Spinner";
import ErrorUI from "./components/UI/ErrorUI";

function App() {
  const dispatch = useDispatch();
  const { error, loading } = useSelector((state) => state.ui);

  const covidData = useSelector((state) => state.data);

  const countriesData = covidData.countriesData;
  useEffect(() => {
    dispatch(fetchData());
  }, []);

  let listItemContent;

  if (countriesData) {
    listItemContent = countriesData.map((data, index) => (
      <ListItem
        key={data.country}
        data={{
          name: data.country,
          totalCases: data.cases,
          newCases: data.todayCases,
          totalDeaths: data.deaths,
          newDeaths: data.todayDeaths,
          totalRecovered: data.recovered,
          newRecovered: data.todayRecovered,
          activeCases: data.active,
          seriousCritical: data.critical,
          tests: data.tests,
          cases1M: data.casesPerOneMillion,
          deaths1M: data.deathsPerOneMillion,
          tests1M: data.testsPerOneMillion,
          population: data.population,
        }}
        index={index + 1}
      />
    ));
  }

  return (
    <>
      {!loading && !error && (
        <List>
          <Header />
          {listItemContent}
        </List>
      )}
      {loading && <Spinner />}
      {error && <ErrorUI />}
    </>
  );
}

export default App;
