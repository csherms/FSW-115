const getData = async () =>{
     try{
          const rickData = await axios.get("https://rickandmortyapi.com/api/character/1");
          const rickPlanet = await axios.get(rickData.data.location.url);
          const rickOrigin = await axios.get(rickData.data.origin.url);

          displayData(rickData, rickPlanet, rickOrigin);
     }
     catch(error){
          console.log(error)
     }
}

getData();




const mainInfo = document.getElementById("mainInfo");

// APPENDING RICK'S INFO TO THE DOM:
const displayData = (rickData, rickPlanet, rickOrigin) =>{
     //NAME:
     const rickName = document.createElement("h1");
     rickName.textContent = rickData.data.name;
     mainInfo.appendChild(rickName);
     //IMAGE OF RICK:
     const pic1 = document.createElement("img");
     pic1.classList = "images"
     pic1.src = rickData.data.image;
     pic1.style.height = '200px';
     mainInfo.appendChild(pic1);
     //ORIGIN:
     const originStory = document.createElement("h2");
     originStory.textContent ="Origin: " + rickOrigin.data.dimension;
     mainInfo.appendChild(originStory);
     //IMAGE AND INFO OF DIMENSION:
     const pic3 = document.createElement("img");
     pic3.src = "./images/rick_dimension.jpg";
     pic3.style.height = '200px';
     mainInfo.appendChild(pic3);
     //PLANET:
     const planet = document.createElement("h2");
     planet.textContent = 'Home Planet: ' + rickPlanet.data.name;
     mainInfo.appendChild(planet);
     //IMAGE OF PLANET:
     const pic2 = document.createElement("img");
     pic2.src = "./images/rick_earth.jpg";
     pic2.style.height = '200px';
     mainInfo.appendChild(pic2);
     //STATUS:
     const status = document.createElement("h2");
     status.textContent ="Status: " + rickData.data.status;
     mainInfo.appendChild(status);
}

displayData();

