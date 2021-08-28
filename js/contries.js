const loadCountries = () => {
    fetch('https://restcountries.eu/rest/v2/all')
        .then(res => res.json())
        .then(data => displayCountries(data))
}
loadCountries();

const displayCountries = countries => {
    const countriesDiv = document.getElementById('countries')
    countries.forEach(country => {
        // console.log(country)
        const div = document.createElement('div');
        div.classList.add('country');
        div.innerHTML = `
        <h3>${country.name}</h3>
        <p>${country.capital}</p>
        <button onclick="loadCountryByName('${country.name}')">Details</button>
        `
        countriesDiv.appendChild(div);
    })
}
const loadCountryByName = name => {
    const url = `https://restcountries.eu/rest/v2/name/${name}`
    fetch(url)
        .then(res => res.json())
        .then(data => countryDetailsDisplay(data[0]));
}
const countryDetailsDisplay = country => {
    console.log(country)
    const countryDiv = document.getElementById('country-detail');
    const div = document.createElement('div');
    div.classList.add('country-detail');
    div.innerHTML = `
    <h4>${country.name}</h4>
    <h5> population: ${country.population}</h5>
    <img width='200px' src ="${country.flag}">
    `
    countryDiv.appendChild(div);
}