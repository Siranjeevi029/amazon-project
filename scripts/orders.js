import { orders } from "../data/orderList.js";
import { dayGenerate } from "../data/day.js";
import { loadPromise,matchingProduct } from "../data/products.js";
import { updateCartQuantity } from "../data/cart.js";
async function getit(){
    await loadPromise();
    
    generateHTML();
}
getit();
function generateHTML(){

  let val=localStorage.getItem('totalQuan');
  if(!val)val=updateCartQuantity();
  document.querySelector('.cart-quantity').
  innerHTML=val;

  if(orders.length){
    
  orders.forEach((order)=>{
    
        document.querySelector('.orders-grid').
        innerHTML+=`<div class="order-container">
              
              <div class="order-header">
                <div class="order-header-left-section">
                  <div class="order-date">
                    <div class="order-header-label">Order Placed:</div>
                    <div>${dayGenerate(order.orderTime)}</div>
                  </div>
                  <div class="order-total">
                    <div class="order-header-label">Total:</div>
                    <div>$${order.totalCostCents/100}</div>
                  </div>
                </div>
    
                <div class="order-header-right-section">
                  <div class="order-header-label">Order ID:</div>
                  <div>${order.id}</div>
                </div>
              </div>
    
              <div class="order-details-grid${order.id}">
               
    
                
              </div>
            </div>`;
            
            order.products.forEach((product)=>{
              
                const prod=matchingProduct(product.productId);
                
                document.querySelector(
                  `.order-details-grid${order.id}`).
                innerHTML+=`
                 <div class="product-image-container">
                  <img src="${prod.image}">
                </div>
    
                <div class="product-details">
                  <div class="product-name">
                    ${prod.name}
                  </div>
                  <div class="product-delivery-date">
                    Arriving on: ${dayGenerate(
                      product.estimatedDeliveryTime
                    )}
                  </div>
                  <div class="product-quantity">
                    Quantity: ${product.quantity}
                  </div>
                  <button class="buy-again-button button-primary">
                    <img class="buy-again-icon" src="images/icons/buy-again.png">
                    <span class="buy-again-message">Buy it again</span>
                  </button>
                </div>
    
                <div class="product-actions">
                  
                    <button data-time="${product.estimatedDeliveryTime}"
                    data-quantity="${product.quantity}"class="track-package-button button-secondary"
                    data-product-id="${product.productId}">
                      Track package
                    </button>
                  </a>
                </div>`;
            });
    });
   
  }
   else{
    
      document.querySelector('.orders-grid').
        innerHTML+=`<h3 style="text-align:center;color:red">No Orders available<h3>`
    }
  const like={};
    
    document.querySelectorAll('.track-package-button').forEach(
      (value)=>{
        value.addEventListener('click',()=>{
          const match=matchingProduct(value.dataset.productId);
          
          like.name=match.name;
          like.quantity=value.dataset.quantity;
          like.image=match.image;
          like.date=value.dataset.time;
          localStorage.setItem('end',JSON.stringify(like));
          window.location.href='tracking.html';
    
        });
      }
    );
    
    
}