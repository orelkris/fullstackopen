export function searchCountries(countries, input) {
  let searchTerm = input.toLowerCase();

  let matchingCountries = [];

  countries.forEach(function (country) {
    let commonName = country?.name?.common?.toLowerCase();
    let officialName = country?.name?.official?.toLowerCase();

    if (commonName.includes(searchTerm) || officialName.includes(searchTerm)) {
      matchingCountries.push(country);
    }
  });

  return matchingCountries;
}
