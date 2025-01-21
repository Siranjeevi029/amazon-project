
import {addToCart,updateCartQuantity} from '../data/cart.js';
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

          <div class="product-price" data-amount="${value.priceCents}">
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
const val=updateCartQuantity();
document.querySelector('.cart-quantity').
innerHTML=val;
localStorage.setItem('totalQuan',val);

document.querySelectorAll('.add-to-cart-button')

.forEach((value)=>{
    value.addEventListener('click',()=>{
       const val=updateCartQuantity();
        addToCart(value);
        document.querySelector('.cart-quantity').
innerHTML=val;
        localStorage.setItem('totalQuan',
          val
        );

    });
  });
  
    



 
    




