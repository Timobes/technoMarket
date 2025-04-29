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


// catalog filter

const catalog_min_price_box = document.getElementById("catalog_min_price_box")
const catalog_max_price_box = document.getElementById("catalog_max_price_box")
const catalog_min_price_inp = document.getElementById("catalog_min_price_inp")
const catalog_max_price_inp = document.getElementById("catalog_max_price_inp")

catalog_min_price_inp.addEventListener("input", () => {
    catalog_min_price_box.value = catalog_min_price_inp.value;
});

catalog_max_price_inp.addEventListener("input", () => {
    catalog_max_price_box.value = catalog_max_price_inp.value;
});

const catalog_min_power_box = document.getElementById("catalog_min_power_box")
const catalog_max_power_box = document.getElementById("catalog_max_power_box")
const catalog_min_power_inp = document.getElementById("catalog_min_power_inp")
const catalog_max_power_inp = document.getElementById("catalog_max_power_inp")

catalog_min_power_inp.addEventListener("input", () => {
    catalog_min_power_box.value = catalog_min_power_inp.value;
});

catalog_max_power_inp.addEventListener("input", () => {
    catalog_max_power_box.value = catalog_max_power_inp.value;
});