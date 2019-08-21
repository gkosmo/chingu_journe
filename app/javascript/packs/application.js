import "bootstrap";

let entries = document.querySelectorAll(".edit-entry")
entries.forEach((entry) => {
    entry.addEventListener("click", (e) => {
         e.preventDefault();
         let id = e.target.dataset.id
         console.log(id)
         console.log(e.target.dataset.id)
         let divs = document.querySelectorAll(`.${id}`)
         console.log(divs)
         divs.forEach((div) => div.classList.toggle("disappear"))
    })
})
