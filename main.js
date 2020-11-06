
let carts = document.querySelectorAll('.btn');
for (let i=0; i < carts.length; i++){
    carts[i].addEventListener('click',()=>{
        console.log("carts");
        cartNumbers();

    })
   
}
function cartNumbers(){
    let productNumbers = localStorage.getItem('cartNumbers');
    productNumbers = parseInt(productNumbers);
    localStorage.setItem('cardNumbers',1);
}
console.log("carts");