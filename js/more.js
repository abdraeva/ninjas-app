
const title = document.querySelector(".title")





window.addEventListener("load", () => {
    const ninjas = JSON.parse(localStorage.getItem("ninjas"))

    const ninjaID = parseInt(localStorage.getItem("ninjaID"))
    const currentNinja = ninjas.find(item => item.id === ninjaID)
    card(currentNinja)
  

  
  // const ninja = JSON.parse(localStorage.getItem("ninjaID"))

  // title.innerHTML = ninja.name
})


const container = document.querySelector(".row")


function card(base) {
  return container.innerHTML = `

      <div class="card">
        <h2>${base.name}</h2>
        <img src=${base.image} />

        <div class="card-body">
          <div>
            <h4>Clan:</h4> <span>${base.clan}</span>
          </div>
          <div>
            <h4Village:</h4> <span>${base.village}</span>
          </div>
          <div>
            <h4>Power:</h4> <span>${base.power}</span>
          </div>
          <div>
            <h4>Level:</h4> <span>${base.level}</span>
          </div>
        </div>

  
      </div>
      
      `


}








  

  
