// Full Catalog 

const fullCatalogBtn = document.getElementById("fullCatalogBtn")
const fullCatalog = document.getElementById("full__catalog__container")
const fullCatalogExitBtn = document.getElementById("full__catalog__exit")

fullCatalogBtn.addEventListener("click", () => {
    fullCatalog.classList.toggle("open")
})

fullCatalogExitBtn.addEventListener("click", () => {
    fullCatalog.classList.toggle("open")
})

const categoryItems = document.querySelectorAll('.full__catalog__category__item');
const catalogItems = document.querySelectorAll('.full__catalog__item');

catalogItems.forEach((item, index) => {
    if (index !== 0) {
        item.classList.remove('open');
    }
});

categoryItems.forEach((item, index) => {
    item.addEventListener('click', function() {
        catalogItems.forEach((catalogItem) => {
            catalogItem.classList.remove('open');
        });

        if (catalogItems[index]) {
            catalogItems[index].classList.toggle('open');
        }
    });
});

// amount counter

const minus_btn = document.getElementById("amount__counter__minus")
const plus_btn = document.getElementById("amount__counter__plus")
let result = document.getElementById("amount__counter__res")

document.addEventListener("DOMContentLoaded", () => {
    let counter = 1;
    
    plus_btn.addEventListener("click", () => {
        counter++;
        result.textContent = counter;
    });

    minus_btn.addEventListener("click", () => {
        if (counter > 1) { 
            counter--;
            result.textContent = counter;
        }
    });
});

