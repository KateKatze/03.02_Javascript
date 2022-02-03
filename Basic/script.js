var newFood = JSON.parse(food);
console.table(newFood);

document.getElementById("results").innerHTML = `My favourite sandwich is a ${newFood[0].sandwich} which has approximately ${newFood[0].calories} calories, along with it I enjoy eating ${newFood[1]friesSize} which have about ${newFood[1].calories} calories`;