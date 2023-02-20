const btnEl = document.getElementById("btn")
const jokeEl = document.getElementById("joke")
const apikey = "mGno89PnWb3EP9adccHSLA==enq9ntYOpX0UHF3v"

const options = {
    method: "GET",
    headers: {
        "X-Api-Key": apikey,
    },
};
const apiURL = "https://api.api-ninjas.com/v1/jokes?limit=1";

async function getJokes() {
    try {
        jokeEl.innerText = "Loading.....";
        btnEl.disabled = true;
        btnEl.innerText = "Loading.....";

        const response = await fetch(apiURL, options);
        const data = await response.json();
        jokeEl.innerText = data[0].joke;

        btnEl.disabled = false;
        btnEl.innerText = "Tell me a joke";

    } catch (error) {
        jokeEl.innerText = "An error occured, Plz try again later ";
        btnEl.disabled = false;
        btnEl.innerText = "Tell me a joke";
        console.log(error);
    }

}
btnEl.addEventListener("click", getJokes)