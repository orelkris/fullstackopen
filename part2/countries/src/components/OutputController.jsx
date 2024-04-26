import { useState, useEffect } from "react";
import Countries from "./Countries";
import Country from "./Country";

const OutputController = ({ countries }) => {
  if (!countries) return null;
  const [adjustCountries, setAdjustCountries] = useState(countries);
  const [size, setSize] = useState(null);

  useEffect(() => {
    setSize(adjustCountries.length);
  }, [adjustCountries.length]);

  useEffect(() => {
    setAdjustCountries(countries);
  }, [countries.length]);

  if (size > 10) {
    return <div>Too many matches, specify another filter</div>;
  } else if (size > 1 && size <= 10) {
    return (
      <Countries
        countries={adjustCountries}
        setAdjustCountries={setAdjustCountries}
      />
    );
  } else if (size === 1) {
    return <Country country={adjustCountries[0]} />;
  } else {
    return null;
  }
};

export default OutputController;
