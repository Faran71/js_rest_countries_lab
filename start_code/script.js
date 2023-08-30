allPromises = null;
const countryList = document.querySelector("#countriesList");

const info = (allPromises) => {
    allPromises.forEach((country) => {
        const countryLi = document.createElement("li");
        // const population = document.createElement("li")
        countryLi.textContent = country.name.common +"  "+ country.population;
        // countryLi.textContent = 
        countryList.appendChild(countryLi);
    });
}
jsonData = null;
const SetUp = async (allPromises) => {
    const response = await fetch("https://restcountries.com/v3.1/all")
    jsonData = await response.json();
    // const allCountries = allPromises.map((result) => result.name).flat()
    console.log(jsonData);
    info(jsonData);
}

SetUp(allPromises);

const input = document.querySelector("#input-box");
const button = document.querySelector("#input-button");
newInput = null;
input.addEventListener("input", (event) => {
    newInput = event.target.value;
    console.log(newInput);
})
button.addEventListener("click", () => {
    countryList.innerHTML = "";
    jsonData.forEach((country) => {
        if(country.name.common.toLowerCase() === newInput.toLowerCase()) {
            const countryLi = document.createElement("li");
            countryLi.textContent = country.name.common +"  "+ country.population;
            countryList.appendChild(countryLi);
        }
    });
    if(newInput === "") {
        SetUp(allPromises);
    }
})




