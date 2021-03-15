
const button1 = document.getElementById("button1");


button1.addEventListener("click", function() {
    axios.get("https://rickandmortyapi.com/api/location")
    .then(response => {
        console.log(response)
        for (let i = 0; i < response.data.results.length; i++) {
        const places = document.createElement("h1");
        places.textContent = response.data.results[i].name;
        const dim = document.createElement("h3");
        dim.textContent = response.data.results[i].dimension;

        places.style.color = "lime";
        dim.style.color = "purple"

        document.body.appendChild(places);
        document.body.appendChild(dim);
        }
    })
    .catch(error => console.log(error))
});