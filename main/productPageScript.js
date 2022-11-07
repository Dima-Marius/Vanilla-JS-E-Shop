let parameters = new URLSearchParams(window.location.search);
let paramId = parameters.get('productID')

const mainImage = document.querySelector('[data-mainImage]')
const oldPrice = document.querySelector('[data-oldPrice]')
const price = document.querySelector('[data-price]')
const icon1 = document.querySelector('[data-icon1]')
const icon2 = document.querySelector('[data-icon2]')
const icon3 = document.querySelector('[data-icon3]')
const icon4 = document.querySelector('[data-icon4]')
const title = document.querySelector('[data-name]')

fetch('http://localhost:3000/products')
.then((response) => response.json())
.then((data) => displayProduct(data))

const displayProduct = (arr) => {
    for (const item of arr) {
        if (item.id == paramId) {
            title.textContent = item.productName;
            price.textContent = '$' + item.newPrice
            oldPrice.textContent = '$' + item.oldPrice;
            mainImage.src = item.productImage;
            icon1.src = item.productImage;
            icon2.src = item.productImage;
            icon3.src = item.productImage;
            icon4.src = item.productImage;
        }
    }
}


/* MENU POP UP */

const menuOpen = document.getElementById('menuOpen')
const menuPopUp = document.getElementById('pop-up')
const redirect = document.getElementById('redirect-menswear')


menuOpen.addEventListener('click', (e) => {
    menuOpen.classList.add('selected')
    e.preventDefault();
    e.stopPropagation();
    console.log(e);
    menuPopUp.classList.toggle('hidden')
    redirect.classList.remove('hidden');
})

document.addEventListener('scroll', () => {
    (!menuPopUp.classList.value.includes('hidden')) && menuPopUp.classList.add('hidden')
    menuOpen.classList.value.includes('selected') && menuOpen.classList.remove('selected')

})


document.addEventListener('click', () => {
    (!menuPopUp.classList.value.includes('hidden')) && menuPopUp.classList.add('hidden')  
})

document.addEventListener('click', () => {
 menuOpen.classList.value.includes('selected') && menuOpen.classList.remove('selected')
})

menuPopUp.addEventListener('click', (e) => {
    e.stopPropagation();
})
