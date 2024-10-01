const gridOne = document.querySelector(".grid-one");
const gridTwo = document.querySelector(".grid-two")
const foodButton = document.querySelector(".menu-button-food");
const cocktailButton = document.querySelector(".cocktail-menu-button");
const drinkButton = document.querySelector(".cocktail-button");


function moveGrids(){
    gridOne.style.transform = "translateX(-1100px)"
    gridTwo.style.transform = "translateX(-1100px)"
}

function resetGrids(){
    gridOne.style.transform = "translateX(0)"
    gridTwo.style.transform = "translateX(0)"
}

foodButton.addEventListener("click", moveGrids)
cocktailButton.addEventListener("click",resetGrids)
drinkButton.addEventListener("click",moveGrids)





