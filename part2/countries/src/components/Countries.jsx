const Countries = ({ countries, setAdjustCountries }) => {
  const displayCountries = countries.map((country, index) => (
    <div key={`${country.name} - ${index}`}>
      <span>{country.name.common}</span>
      <button onClick={() => setAdjustCountries([country])}>show</button>
    </div>
  ));
  return <div>{displayCountries}</div>;
};

export default Countries;
