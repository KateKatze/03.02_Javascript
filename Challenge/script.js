var arr = JSON.parse(array);
console.table(arr);

for (let value of arr) {
    document.getElementById("result").innerHTML += `
    <div class="card m-2" style="width: 18rem;">
    <img src="${value.img}" class="card-img-top" alt="${value.name}">
    <div class="card-body">
      <h5 class="card-title">${value.name}, ${value.production_year}</h5>
      <p class="card-text">${value.car_price} <br> ${value.color} <br> ${value.transmission}</p>
    </div>
  </div>
    `;
}