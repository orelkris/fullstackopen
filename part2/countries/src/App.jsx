import { useState, useEffect } from "react";
import Form from "./components/Form";
import OutputController from "./components/OutputController";
import actions from "./server";
import { searchCountries } from "./utils";

function App() {
  const [countries, setCountries] = useState(null);
  const [filteredCountires, setFilteredCountries] = useState(null);
  const [searchInput, setSearchInput] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleInput = (event) => {
    const input = event.target.value;
    setSearchInput(input);

    if (!countries) {
      setLoading(true);
    }
  };

  useEffect(() => {
    actions.getCountries().then((countries) => {
      setCountries(countries);
      setFilteredCountries(countries);
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    if (!countries) return;
    const output = searchCountries(countries, searchInput);
    setFilteredCountries(output);
  }, [searchInput]);

  return (
    <>
      <div>
        <Form handleInput={handleInput} value={searchInput} />
        {loading && <span>Loading...</span>}
        {searchInput && <OutputController countries={filteredCountires} />}
      </div>
    </>
  );
}

export default App;
