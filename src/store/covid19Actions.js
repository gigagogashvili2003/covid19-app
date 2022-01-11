import { covidActions } from "./covidSlice";

export const fetchData = () => {
  return async (dispatch) => {
    dispatch(
      covidActions.showSpinner({
        loading: true,
        error: false,
      })
    );
    const sendRequest = async () => {
      const res = await fetch(
        "https://disease.sh/v3/covid-19/countries?sort=cases"
      );
      const data = await res.json();

      dispatch(
        covidActions.showSpinner({
          loading: false,
          error: false,
        })
      );
      return data;
    };

    try {
      const data = await sendRequest();
      dispatch(
        covidActions.setData({
          countriesData: data,
        })
      );
    } catch (err) {
      dispatch(
        covidActions.showSpinner({
          loading: false,
          error: true,
        })
      );
    }
  };
};
