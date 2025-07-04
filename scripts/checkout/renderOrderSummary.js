

import { cart,removeFromCart,updateDeliveryOptions } from '../../data/cart.js';
import { deliveryOptions } from '../../data/deliveryOptions.js';
import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';
import { orderSummary } from './orderSummary.js';
import { matchingProduct } from '../../data/products.js';
import { newDayGenerate } from '../../data/day.js';

export function renderOrderSummary(){
  
  
    
    powerUp();
    
    let top='';
    let main=document.querySelector('.order-summary');


let s='';
cart.forEach((value)=>{
    
    let ID=value.productId;
    let checked=value.deliveryOptionsId;
   
    let match=matchingProduct(ID);
    
    
    
    s+=`<div class="cart-item-container">
            <div class="delivery-date">
              Delivery date: ${deliveryOptionsHTML
                (match.id,checked)}
            </div>

            <div class="cart-item-details-grid">
              <img class="product-image"
                src="${match.image}">

              <div class="cart-item-details">
                <div class="product-name">
                  ${match.name}
                </div>
                <div class="product-price">
                
                  $${(match.priceCents/100).toFixed(2)}
                </div>
                <div class="product-quantity">
                  <span>
                    Quantity: <span class="quantity-label">${value.quantity}</span>
                  </span>
                  <span class="update-quantity-link link-primary">
                    
                  </span>
                  <span class="delete-quantity-link link-primary" data-id="${match.id}">
                    Delete
                  </span>
                </div>
              </div>

              <div class="delivery-options">
                <div class="delivery-options-title">
                  Choose a delivery option:
                </div>
                ${top}
              </div>
            </div>
          </div>
`;

});
main.innerHTML=s;

let del=document.querySelectorAll('.delete-quantity-link');
del.forEach((value)=>{
    value.addEventListener('click',()=>{
        value.parentElement.parentElement.parentElement.parentElement.remove();
        removeFromCart(value.dataset.id);
        powerUp();
        orderSummary();
        
    })
});
document.querySelectorAll('.delivery-option').
forEach((value)=>{
  
  value.addEventListener('click',()=>{

     
     updateDeliveryOptions(value);
    
     renderOrderSummary();
     orderSummary();
     
     
  })
});
function deliveryOptionsHTML(id,checked){
 
    let yemma='';
    
    let IDE='';
    deliveryOptions.forEach((value)=>{
      let check='';
      
      
      let val=newDayGenerate(value.deliveryDays);
      if(checked===value.id){
        check="checked";
        IDE=val;
      }
      let priceCents;
      if(value.priceCents){
        priceCents=`$${(value.priceCents/100).toFixed(2)} - `;
      }
      else priceCents='FREE';
      yemma+=`
      <div class="delivery-option"
      data-id="${id}"
                      data-delivery-id="${value.id}"
                      ">
                    <input type="radio" ${check}
                      class="delivery-option-input"
                      name="delivery-option-${id}"
                      >
                    <div>
                      <div class="delivery-option-date">
                        ${val}
                      </div>
                      <div class="delivery-option-price">
                        ${(priceCents)} Shipping
                      </div>
                    </div>
                  </div>
      `
    });
   top=yemma;
   return IDE;
  }
}
function powerUp(){

  const val = localStorage.getItem('totalQuan') || 0;
  
    document.querySelector('.checkout-header-middle-section').innerHTML=
    `Checkout (<a class="return-to-home-link"
        href="index.html">${val} items</a>)`;
}