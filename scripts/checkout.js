import { orderSummary } from "./checkout/orderSummary.js";
import { renderOrderSummary } from "./checkout/renderOrderSummary.js";
import { loadPromise,products } from "../data/products.js";
// new Export((products)=>{
//     renderOrderSummary(products);
// orderSummary();
// });
loadPromise(()=>{
    renderOrderSummary(products);
    orderSummary();
});