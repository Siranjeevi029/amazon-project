import { advancedDayGenerate } from "../data/day.js";
const items=JSON.parse(localStorage.getItem('end'));
let val=localStorage.getItem('totalQuan');
  if(!val)val=updateCartQuantity();
  document.querySelector('.cart-quantity').
  innerHTML=val;
document.querySelector('.main')
.innerHTML=`<div class="order-tracking">
        <a class="back-to-orders-link link-primary" href="orders.html">
          View all orders
        </a>

        <div class="delivery-date">
          Arriving on ${advancedDayGenerate(items.date)}
        </div>

        <div class="product-info">
          ${items.name}
        </div>

        <div class="product-info">
          Quantity: ${items.quantity}
        </div>

        <img class="product-image" src="${items.image}">

        <div class="progress-labels-container">
          <div class="progress-label">
            Preparing
          </div>
          <div class="progress-label current-status">
            Shipped
          </div>
          <div class="progress-label">
            Delivered
          </div>
        </div>

        <div class="progress-bar-container">
          <div class="progress-bar"></div>
        </div>
      </div>`;

      window.addEventListener("pageshow", function (event) {
  if (event.persisted) {
    // Page was restored from cache — force a reload
    window.location.reload();
  }
});