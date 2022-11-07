



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
    const endpoint = '/products?_page=1&_limit=16'

    let select;

    fetch(url + endpoint)
    .then((response) => response.json())
    .then((data) => {
        addProduct(data)
        select = document.querySelectorAll('.product');
    })

console.log(select);
/* }) */

const router = (id) => {
    const pageUrl = 'productPage.html'
    document.location.href = `${pageUrl}?productID=${id}`;
}

const addProduct = (products) => {
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

const latestDesignsBtn = document.getElementById('latest-designs-btn');
const specialOffersBtn = document.getElementById('special-offers-btn');
const collectionsBtn = document.getElementById('collections-btn');

const categoryButtons = [latestDesignsBtn,specialOffersBtn,collectionsBtn];

const removeActive = (arr) => {
    arr.forEach(item => item.classList.remove('active'))
}

for (const button of categoryButtons) {
    button.addEventListener('click', () => {
        removeActive(categoryButtons)
        button.classList.add('active');
        })}

latestDesignsBtn.addEventListener('click', () => {
        let productElements = document.getElementsByClassName('product');
        
        for (const product of productElements) {
            product.classList.remove('hidden')
        }})

specialOffersBtn.addEventListener('click', () => {
    let productElements = document.getElementsByClassName('product');

    for (const product of productElements) {
        let productSpecialOfferText = product.querySelector('div').querySelector('span').textContent

        product.classList.remove('hidden')
        productSpecialOfferText === 'false' && product.classList.add('hidden');
    }})

collectionsBtn.addEventListener('click', () => {
    let productElements = document.getElementsByClassName('product');
    
    for (const product of productElements) {
        let productSpanText = product.querySelector('div').querySelector('h3').textContent

        product.classList.remove('hidden')
        productSpanText === 'false' && product.classList.add('hidden');
    }})

const outputAll = output.querySelectorAll('*');

console.log(outputAll);



    /*  console.log(productElements); */
       /*  for (const item of productElements) {
            item.querySelector('div').querySelector('span').textContent === 'false' ? item.classList.add('hidden') : null; */


            /*  
        let elZero = productElements[0].querySelectorAll('*')
        elZero[7].innerText === 'false' ? productElements[0].remove() : null;

        
/* const outputChildren = output.children;

console.log(outputChildren); */
/*         


(function(d) {
    var products = document.getElementsByClassName('product');
    for(var i = products.length - 1;i >= 0 ; --i) {
     products[i].onclick = function() {
      var src = this.getElementsByTagName('img')[0].src;
      document.location.href = 'demo.html#' +  src;
     }
    }
   })(document);  */
/* 
const pageUrl = 'productPage.html'
const queryParams = '?prod'


const router = () => {
  document.location.href = document.location.href.includes(queryParams) ? document.location.href : document.location.href = pageUrl + queryParams
}

const test = () => {
    console.log('working bruh');
}

const z = document.getElementsByClassName('product')


const addRed = (e) => {
    console.log(e);
}

const viewParent = () => {
    console.log('yes');
}

document.addEventListener('click', () => { 
 for (const item of z) {
     item.querySelector('[data-navigate]').addEventListener('click', (e) => {
        document.location.href = `${pageUrl}?productID='${item.querySelector('[data-params]').value}'`

     }) 
   }
})

 */