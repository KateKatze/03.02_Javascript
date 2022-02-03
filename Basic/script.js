var food = JSON.parse(food);
console.table(food);

document.getElementById("results").innerHTML = `My favourite sandwich is a ${food[0].sandwich} which has approximately ${food[0].calories} calories, along with it I enjoy eating ${food[1]friesSize} have about ${food[1].calories} calories`;