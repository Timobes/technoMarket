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


// auth popup

const burgerBtn = document.getElementById("burger-btn")
const burger = document.getElementById("burger")

burgerBtn.addEventListener("click", () => {
    burger.classList.toggle("burger-open")
})


//  Carousel

document.querySelectorAll('.carousel').forEach(carousel => {
  const leftBtn = carousel.querySelector('.carousel__left-btn')
  const rightBtn = carousel.querySelector('.carousel__right-btn')
  const carouselContainer = carousel.querySelector('.main__carousel')

  leftBtn.addEventListener('click', () => {
    carouselContainer.scrollBy({ left: -300, behavior: 'smooth' })
  })

  rightBtn.addEventListener('click', () => {
    carouselContainer.scrollBy({ left: 300, behavior: 'smooth' })
  })
})


