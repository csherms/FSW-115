
const button2 = document.getElementById("button2");

button2.addEventListener("click", function() {
    axios.get("https://www.breakingbadapi.com/api/characters")
    .then(response => {
        console.log(response)
        for (let i = 0; i < response.data.length; i++) {
        const bb = document.createElement("h1");
        bb.textContent = response.data[i].name;

        const pic = document.createElement("img")
        pic.src = response.data[i].img

        bb.style.color = "firebrick"
        pic.style.height = "400px";
        pic.style.width = "400px";


        document.body.appendChild(bb);
        document.body.appendChild(pic)
        }
    })
    .catch(error => console.log(error))
});