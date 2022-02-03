var arr = JSON.parse(array);
console.table(arr);

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

// function enlargeImg(arr, i) {
//     img.style.width = "60%";
//     img.style.height = "auto";
//     img.style.transition = "width 0.5s ease";
// }

// function resetImg() {
//     img.style.width = "40%";
//     img.style.height = "auto";
//     img.style.transition = "width 0.5s ease";
// }

function moreDetails(index) {
    return `
<div class="col-12">
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

var cardDetails = document.getElementsByClassName("cardDetails");

for (let i = 0; i < cardDetails.length; i++) {
    cardDetails[i].addEventListener("click", function() {
        document.getElementById("details").innerHTML = moreDetails(i);
    })
}