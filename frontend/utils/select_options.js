import CountryArray from './countries';

// Generate party sizes
const partySizes = [];
partySizes.push({value: 1, label: "1 person"});
for (let i = 2; i < 21; i++) {
  partySizes.push({value: i, label: `${i} people`});
}
partySizes.push({value: undefined, label: "Larger party"});

// Generate reservation times
const reservationTimes = [{value: '', label: "4:30 PM"}];
for (let hour = 5; hour < 12; hour++) {
  reservationTimes.push({value: '', label: `${hour}:00 PM`});
  reservationTimes.push({value: '', label: `${hour}:30 PM`});
}

// Generate countries
const countries = [{value: "United States", label: "United States"}];
CountryArray.forEach(country => {
  if (country.name !== "United States") {
    countries.push({value: country.name, label: country.name});
  }
});

export { partySizes, reservationTimes, countries };
