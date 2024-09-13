const button = document.getElementById("share-button");
const card = document.querySelector(".card");
const footer = document.getElementById("card-footer");
const profile = document.querySelector(".card-profile");
const socials = document.querySelector(".social-buttons");

button.addEventListener("click", () => {
    if (socials.style.display == "none") {
      footer.classList.add("popup-open")
      socials.style.display = "flex"
      button.classList.add("clicked")
    } else {
      footer.classList.remove("popup-open")
      socials.style.display = "none"
      button.classList.remove("clicked")
    }
})
