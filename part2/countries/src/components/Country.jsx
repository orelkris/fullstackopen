import Weather from "./Weather";

const Country = ({ country }) => {
  const [lat, lon] = country.capitalInfo.latlng;

  const languages = Object.values(country.languages).map((lang, index) => (
    <li key={`${country.name.common} - ${index}`}>{lang}</li>
  ));
  const imagaUrl = country.flags.png;
  return (
    <div>
      <h1>{country.name.common}</h1>
      <h3>Capital: {country.capital}</h3>
      <h3>Area: {country.area}</h3>
      <h3>Languages:</h3>
      <ul>{languages}</ul>
      <img className="image" src={`${imagaUrl}`} />
      <Weather lat={lat} lon={lon} name={country.capital[0]} />
    </div>
  );
};

export default Country;
