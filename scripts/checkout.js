import { orderSummary } from "./checkout/orderSummary.js";
import { renderOrderSummary } from "./checkout/renderOrderSummary.js";
import { loadPromise,loadCart} from "../data/products.js";
// new Export((products)=>{
//     renderOrderSummary(products);
// orderSummary();
// });

async  function hello(){
   try{
    
    await loadPromise();
    await new Promise((resolve)=>{
        loadCart(()=>{
            // reject('error occured')
            resolve();
        });
    });
    // throw 'SyntaxError';
    // console.log('hi');
   }
   catch(e){
    console.log(e);
   }
   finally{
    renderOrderSummary();
    orderSummary();
    
   }
    
    
}

hello();

window.addEventListener("pageshow", function (event) {
  if (event.persisted) {
    // Page was restored from cache — force a reload
    window.location.reload();
  }
});


// loadPromise().then(()=>{
//     return new Promise((resolve)=>{
//         loadCart(()=>{
//             resolve();
//         });
//     });
// }).then(()=>{
//     console.log('shabba');
//     renderOrderSummary();
//      orderSummary();
// })


