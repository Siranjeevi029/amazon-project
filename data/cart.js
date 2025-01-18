let cart=[];
export function addToCart(value){
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
    }
    let quan=document.querySelector('.cart-quantity');
    export function updateCartQuantity(){
        let quantity=0;
cart.forEach((value)=>{
  quantity+=value.quantity;
});
quan.innerHTML=quantity;

      }