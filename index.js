const burger = document.querySelector('.burger');
const cross = document.querySelector('.cross');
const menu = document.querySelector('.menu');
const dropdownMenu = document.querySelector('.dropdown-menu');
const body = document.querySelector('body');

let isHidden = true;

menu.addEventListener('click', (e)=>{
    if(isHidden){ 
    burger.style.display = 'none';
    dropdownMenu.style.display = 'flex';
    body.style.position = 'fixed';
    isHidden = !isHidden;
    return cross.style.display = 'flex';
    } 
    burger.style.display = 'flex';
    dropdownMenu.style.display = 'none';
    body.style.position = 'static';
    isHidden = !isHidden;
    return cross.style.display = 'none';
});

const productDropdown = document.querySelector('#product');
const productList = document.querySelector('.product');
const productArrow = document.querySelector('#product-img');

const companyDropdown = document.querySelector('#company');
const companyList = document.querySelector('.company');
const companyArrow = document.querySelector('#company-img');

const connectDropdown = document.querySelector('#connect');
const connectList = document.querySelector('.connect');
const connectArrow = document.querySelector('#connect-img');

let connect = true, company = true, product = true;
companyDropdown.addEventListener('click', ()=>{
    console.log(company)
    return (
    company ? (
        companyList.style.display = 'flex',
        companyArrow.style.transform = 'rotateX(180deg)',
        company = !company
        ) : (
            companyList.style.display = 'none',
            companyArrow.style.transform = 'rotateX(0)',
            company = !company
        )       
    )}
);
connectDropdown.addEventListener('click', (e)=>{
    console.log(connect)
    return (
    connect ? (
        connectList.style.display = 'flex',
        connectArrow.style.transform = 'rotateX(180deg)',
        connect = !connect
        ) : (
            connectList.style.display = 'none',
            connectArrow.style.transform = 'rotateX(0)',
            connect = !connect
        )       
    )}
);

productDropdown.addEventListener('click', ()=>{
    console.log(product)
    return (
    product ? (
        productList.style.display = 'flex',
        productArrow.style.transform = 'rotateX(180deg)',
        product = !product
        ) : (
            productList.style.display = 'none',
            productArrow.style.transform = 'rotateX(0)',
            product = !product
        )       
    )}
);

