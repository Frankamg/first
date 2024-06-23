const container = document.querySelector(".countries-container");
const input = document.getElementById("inputSearch");
const inputRange = document.getElementById("inputRange");
const rangeValue = document.getElementById("rangeValue");
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const form = document.querySelector("form");
let range;
let countriesData = [];

const fetchCountries = async () => {
  await fetch("all.json")
    .then((res) => res.json())
    .then((data) => {
      countriesData = data;
    });
};

  const countriesDisplay = () => {
    container.innerHTML = countriesData.map((country) =>
      `
        <div class="card">
        <img src=${country.flags.svg}>
        <h2>${country.translations.fra.common}</h2>
        <h3>${country.capital}</h3>
        <p>Population : ${country.population.toLocaleString()}</p>
        </div>
        
        `
      )
      .join("");
  }
 countriesDisplay()
  // input.addEventListener("input", (e) => {
  //   fetchCountries(e.target.value);
    
  // });
  // window.addEventListener("load",  () => {
  //   countriesDisplay();
  // });
  
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    countriesDisplay();

  });