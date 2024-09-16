const detailButtons = document.querySelectorAll(".details-button");
const sunset = document.querySelector(".sunset-social-hour")
const gourmet = document.querySelector(".gourmet-food")
const violetVibes = document.querySelector(".violet-vibes")
const tropicalJazz = document.querySelector(".tropical-jazz")

let activeEvent = sunset;

detailButtons.forEach((button) => {
    button.addEventListener("click", () => {
        
        let hasClass = (button.classList.contains("sunset") ? "sunset" :
               (button.classList.contains("gourmet") ? "gourmet" :
               (button.classList.contains("violet") ? "violet" :
               (button.classList.contains("tropical") ? "tropical" : "none"))));

               switch(hasClass){
                
                case "sunset":
                    activeEvent.classList.remove("show")
                    activeEvent.classList.add("hidden");
                    sunset.classList.remove("hidden")
                    sunset.classList.add("show");
                    activeEvent = sunset;
                    break;

                case "gourmet":
                    activeEvent.classList.remove("show")
                    activeEvent.classList.add("hidden");
                    gourmet.classList.remove("hidden")
                    gourmet.classList.add("show");
                    activeEvent = gourmet;
                    break;
                case "violet":
                    activeEvent.classList.remove("show")
                    activeEvent.classList.add("hidden");
                    violetVibes.classList.remove("hidden")
                    violetVibes.classList.add("show");
                    activeEvent = violetVibes;
                    break;
                case "tropical":
                    activeEvent.classList.remove("show")
                    activeEvent.classList.add("hidden");
                    tropicalJazz.classList.remove("hidden")
                    tropicalJazz.classList.add("show");
                    activeEvent = tropicalJazz;
                    break;
               }
    })
})