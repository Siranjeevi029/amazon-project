import { cart } from '../../data/cart.js';
import { deliveryOptions } from '../../data/deliveryOptions.js';
export function orderSummary(){
    let c=localStorage.getItem('carted');
    if(c){
        const cart=c;
    }
    let totalSum=0;
    let Shipping=0;
    let totalBeforeTax=0;
    let estimatedTax=0;
    let orderTotal=0;
    cart.forEach((value)=>{
        totalSum+=value.quantity*value.amount;
        let ID=value.deliveryOptionsId;
        deliveryOptions.forEach((val)=>{
            if(val.id===ID){
                Shipping+=val.priceCents;
            }
        });
        
    });
    totalBeforeTax=totalSum+Shipping;
    estimatedTax=totalBeforeTax/10;
    orderTotal=totalBeforeTax+estimatedTax;
   document.querySelector('.payment-summary').innerHTML=`
   <div class="payment-summary-title">
            Order Summary
          </div>

          <div class="payment-summary-row">
            <div>Items (${localStorage.getItem('totalQuan')}):</div>
            <div class="payment-summary-money">$${(totalSum/100).toFixed(2)}</div>
          </div>

          <div class="payment-summary-row">
            <div>Shipping &amp; handling:</div>
            <div class="payment-summary-money">$${(Shipping/100).toFixed(2)}</div>
          </div>

          <div class="payment-summary-row subtotal-row">
            <div>Total before tax:</div>
            <div class="payment-summary-money">$${(totalBeforeTax/100).toFixed(2)}</div>
          </div>

          <div class="payment-summary-row">
            <div>Estimated tax (10%):</div>
            <div class="payment-summary-money">$${(estimatedTax/100).toFixed(2)}</div>
          </div>

          <div class="payment-summary-row total-row">
            <div>Order total:</div>
            <div class="payment-summary-money">$${(orderTotal/100).toFixed(2)}</div>
          </div>

          <button class="place-order-button button-primary">
            Place your order
          </button>
   `;
}
