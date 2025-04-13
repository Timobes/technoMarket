// Full Catalog 

let fullCatalogBtn = document.getElementById("fullCatalogBtn")
let fullCatalog = document.getElementById("full__catalog__container")
let fullCatalogExitBtn = document.getElementById("full__catalog__exit")

fullCatalogBtn.addEventListener("click", () => {
    fullCatalog.classList.toggle("open")
})

fullCatalogExitBtn.addEventListener("click", () => {
    fullCatalog.classList.toggle("open")
})