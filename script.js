const container = document.querySelector(".container");
let previousLetter = "";
fetch("https://restcountries.eu/rest/v2/all")
  .then((response) => response.json())
  .then((countries) => {
    countries
      .sort((a, b) => {
        if (a.name.toUpperCase() > b.name.toUpperCase()) {
          return 1;
        } else {
          return -1;
        }
      })
      .forEach((country) => {
        let currentLetter = country.name.toUpperCase().charAt(0);
        if (previousLetter === "" || previousLetter !== currentLetter) {
          previousLetter = currentLetter;
          const heading = `
          <div class="heading">
            <h2>${previousLetter}</h2>
          </div> 
          `;
          container.innerHTML += heading;
        }
        const box = `
            <div class=box>
            <img class=country-image src=${country.flag}>
            <div class=country-info>
              <h3>${country.name}</h3>
              <p>Population: ${country.population}</p>
              <p>Region: ${country.region}</p>
              <p>Capital: ${country.capital}</p>
              </div>
            </div>
          `;
        container.innerHTML += box;
      });
  });
