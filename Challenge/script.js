// getting stuff from the JSON

var arr = JSON.parse(array);

// table for the info made

console.table(arr);

// extract info in the cards

for (let value of arr) {
    document.getElementById("result").innerHTML += `
    <div class="card cardDetails m-2" style="width: 18rem;">
    <img src="${value.img}" class="card-img-top" alt="${value.name}">
    <div class="card-body">
      <h5 class="card-title">${value.name}, ${value.production_year}</h5>
      <p class="card-text">${value.car_price} <br> ${value.color} <br> ${value.transmission}</p>
    </div>
  </div>
    `;
}

// bigger card made here

function moreDetails(index) {
    return `
  <div class="col-lg-7 col-md-8 col-sm-9">
  <div class="card cardDetails m-2">
  <img src="${arr[index].img}" class="card-img-top" alt="${arr[index].name}">
  <div class="card-body">
  <h5 class="card-title">${arr[index].name}, ${arr[index].production_year}</h5>
  <p class="card-text">${arr[index].car_price} <br> ${arr[index].color} <br> ${arr[index].transmission}</p>
  </div>
  </div>
  </div>
  `;
}

// variable for the doc... to make a loop

var cardDetails = document.getElementsByClassName("cardDetails");

// loop for each card to "zoom" it 

for (let i = 0; i < cardDetails.length; i++) {
    cardDetails[i].addEventListener("click", function() {
        document.getElementById("details").innerHTML = moreDetails(i);
    })
}