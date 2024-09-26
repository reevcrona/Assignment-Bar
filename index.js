const gridOne = document.querySelector(".grid-one");
const gridTwo = document.querySelector(".grid-two")
const foodButton = document.querySelector(".menu-button-food");
const cocktailButton = document.querySelector(".cocktail-menu-button");


foodButton.addEventListener("click", () => {
    gridOne.style.transform = "translateX(-1100px)"
    gridTwo.style.transform = "translateX(-1100px)"
})

cocktailButton.addEventListener("click", () => {
    gridOne.style.transform = "translateX(0)"
    gridTwo.style.transform = "translateX(0)"
})





