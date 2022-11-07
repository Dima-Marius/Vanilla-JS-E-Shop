



const threeBtn = document.getElementById('three-btn')
const pageBtnPrev = document.getElementById('page-btn-prev')
const pageBtnNext = document.getElementById('page-btn-next')
const productsHighlightOutput = document.querySelector('.products-highlight-output')
const pages = document.getElementById('pages')
let page = 1; //default starting page


    
// THIS IS DONE BADLY!! FIGURED OUT I CAN FETCH DB ONLY ONCE AND FILTER ID'S BY PAGE
 const removeActives = (args) => {
    for (const btn of args.children) {
        btn.classList.remove('page-select')
    }}
  for (let i = 1; i < pages.children.length - 1; i++) {
    pages.children[i].addEventListener('click', () => {
        const thirdEndpoint = `/products?_page=${pages.children[i].innerText}&_limit=10`
        removeActives(pages)
        pages.children[i].classList.add('page-select')
        page = parseInt(pages.children[i].innerText)
        console.log(page);
        const prevHeight = window.getComputedStyle(output, null).getPropertyValue("height");
        output.innerHTML = '';
        output.style.height = prevHeight;
        const url = 'http://localhost:3000'
        fetch(url + thirdEndpoint)
        .then((response) => response.json())
        .then((data) => addAllProducts(data))
    })}

    pageBtnNext.addEventListener('click', () => {
    removeActives(pages);
    page += 1
    const pageLimit = 4;
    page > pageLimit ? pages.children[pageLimit].classList.add('page-select')
    : pages.children[page].classList.add('page-select');
    if (page < pageLimit + 1) {
    pages.children[page].classList.add('page-select')
    const prevHeight = window.getComputedStyle(output, null).getPropertyValue("height");
    output.innerHTML = '';
    output.style.height = prevHeight;
    const url = 'http://localhost:3000'
    const secondEndpoint = `/products?_page=${page}&_limit=10`
    fetch(url + secondEndpoint)
    .then((response) => response.json())
    .then((data) => addAllProducts(data))
  } else { 
    page = pageLimit;
  }})

  pageBtnPrev.addEventListener('click', () => {
    removeActives(pages);
    page -= 1
    page < 1 ? pages.children[1].classList.add('page-select') : pages.children[page].classList.add('page-select')
    if (page > 0) {
    pages.children[page].classList.add('page-select')
    const prevHeight = window.getComputedStyle(output, null).getPropertyValue("height");
    output.innerHTML = '';
    output.style.height = prevHeight;
    const url = 'http://localhost:3000'
    const secondEndpoint = `/products?_page=${page}&_limit=10`

    fetch(url + secondEndpoint)
    .then((response) => response.json())
    .then((data) => addAllProducts(data))
  } else { 
    page = 1;
  }})

const output = document.getElementById('products-output')
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






/* latestDesignsBtn.addEventListener('click', function(e) {
    e.preventDefault();
 */

    //appear by default
    const url = 'http://localhost:3000'
    const endpoint = '/highlights/'

    fetch(url + endpoint)
    .then((response) => response.json())
    .then((data) => addProductHighlights(data))
/* }) */

    const secondEndpoint = `/products?_page=${page}&_limit=10`

    fetch(url + secondEndpoint)
    .then((response) => response.json())
    .then((data) => addAllProducts(data))

const router = (id) => {
        const pageUrl = 'productPage.html'
        document.location.href = `${pageUrl}?productID=${id}`;
}

const addProductHighlights = (products) => {
    const template = document.getElementById('product-template')

    for (const item of products) {
        const clonedTemplate = template.content.cloneNode(true)

        let productName = clonedTemplate.querySelector('[data-name]')
        let productImage = clonedTemplate.querySelector('[data-image]')
        let productPrice = clonedTemplate.querySelector('[data-price]')
        let productOldPrice = clonedTemplate.querySelector('[data-oldPrice]')
        let productDetail = clonedTemplate.querySelector('[data-detail]')
        let productIsSpecialOffer = clonedTemplate.querySelector('[data-specialOffer]')
        let productIsPartOfCollection = clonedTemplate.querySelector('[data-partOfCollection]')
        let dataParams = clonedTemplate.querySelector('[data-params]')
        let detailsBtn = clonedTemplate.querySelector('[data-navigates]')

        productName.textContent = item.productName;
        productPrice.textContent = '$' + item.newPrice;
        productOldPrice.textContent = '$' + item.oldPrice;
        productDetail.textContent = item.topRightDetail;
        productDetail.textContent === 'new' ? productDetail.style.width = '50px' : productDetail.style.width = 'max-content';
        productIsSpecialOffer.textContent = item.specialOffer
        productIsPartOfCollection.textContent = item.partOfCollection
        dataParams.value = item.id
        detailsBtn.onclick = () => router(item.id)

        productImage.src = item.productImage;

        productsHighlightOutput.appendChild(clonedTemplate)

    }
}

const addAllProducts = (products) => {
    const template = document.getElementById('product-template')

    for (const item of products) {
        const clonedTemplate = template.content.cloneNode(true)

        let productName = clonedTemplate.querySelector('[data-name]')
        let productImage = clonedTemplate.querySelector('[data-image]')
        let productPrice = clonedTemplate.querySelector('[data-price]')
        let productOldPrice = clonedTemplate.querySelector('[data-oldPrice]')
        let productDetail = clonedTemplate.querySelector('[data-detail]')
        let productIsSpecialOffer = clonedTemplate.querySelector('[data-specialOffer]')
        let productIsPartOfCollection = clonedTemplate.querySelector('[data-partOfCollection]')
        let dataParams = clonedTemplate.querySelector('[data-params]')
        let detailsBtn = clonedTemplate.querySelector('[data-navigates]')

        productName.textContent = item.productName;
        productPrice.textContent = '$' + item.newPrice;
        productOldPrice.textContent = '$' + item.oldPrice;
        productDetail.textContent = item.topRightDetail;
        productDetail.textContent === 'new' ? productDetail.style.width = '50px' : productDetail.style.width = 'max-content';
        productIsSpecialOffer.textContent = item.specialOffer
        productIsPartOfCollection.textContent = item.partOfCollection
        dataParams.value = item.id
        detailsBtn.onclick = () => router(item.id)

        productImage.src = item.productImage;

        output.appendChild(clonedTemplate)

    }
}




    /*  console.log(productElements); */
       /*  for (const item of productElements) {
            item.querySelector('div').querySelector('span').textContent === 'false' ? item.classList.add('hidden') : null; */


            /*  
        let elZero = productElements[0].querySelectorAll('*')
        elZero[7].innerText === 'false' ? productElements[0].remove() : null;

        
/* const outputChildren = output.children;

console.log(outputChildren); */
        
