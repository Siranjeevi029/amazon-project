
import {cart} from '../data/cart.js';
import {products} from '../data/products.js';
let save=document.querySelector(".products-grid");

products.forEach((value)=>{
    const html=`<div class="product-container">
          <div class="product-image-container">
            <img class="product-image"
              src="${value.image}">
          </div>

          <div class="product-name limit-text-to-2-lines">
            ${value.name}
          </div>

          <div class="product-rating-container">
            <img class="product-rating-stars"
              src="images/ratings/rating-${value.rating.stars*10}.png">
            <div class="product-rating-count link-primary">
              ${value.rating.count}
            </div>
          </div>

          <div class="product-price">
            $${value.priceCents/100}
          </div>

          <div class="product-quantity-container">
            <select>
              <option selected value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>

          <div class="product-spacer"></div>

          <div class="added-to-cart">
            <img src="images/icons/checkmark.png">
            Added
          </div>

          <button data-id="${value.id}" class="add-to-cart-button button-primary">
            Add to Cart
          </button>
        </div>`;
        
        save.innerHTML+=html;

});

let quan=document.querySelector('.cart-quantity');
document.querySelectorAll('.add-to-cart-button')

.forEach((value)=>{
    value.addEventListener('click',()=>{
       
        let final=value.dataset.id;
        let t=false;
        for(let i=0;i<cart.length;i++){
            if(cart[i].productId===final){
                let q=Number(value.parentElement.children[4].children[0].value);
                cart[i].quantity+=q;
                t=true;
                break;
            }
        }
        if(!t) {
            let q=Number(value.parentElement.children[4].children[0].value);
            cart.push({productId:final,quantity:q});
        }
        console.log(cart);
        let quantity=0;
cart.forEach((value)=>{
    quantity+=value.quantity;
});
quan.innerHTML=quantity;

    });
});


