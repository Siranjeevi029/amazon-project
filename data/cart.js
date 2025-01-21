export let cart=JSON.parse(localStorage.getItem("carted"));
if(!cart){
    cart=[
        {productId: "3ebe75dc-64d2-4137-8860-1f5a963e534b",
            name: "6 Piece White Dinner Plate Set",
            quantity:2,
            amount:6578,
            deliveryOptionsId:1
        },
        {productId: "8c9c52b5-5a19-4bcb-a5d1-158a74287c53",
            name: "6-Piece Nonstick, Carbon Steel Oven Bakeware Baking Set",
            quantity:1,
            amount:2078,
            deliveryOptionsId:2
        },
        
    ];
}


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
         
          let amount=Number(value.parentElement.children[3].dataset.amount);
        //   console.log(amount);
          cart.push({productId:final,quantity:q,amount,deliveryOptionsId:1});
          
          // totalSum+=parseFloat(value.parentElement.children[3].
          //   dataset.amount
          // );
      }
      saveToStorage();
      
      
    }
    export function removeFromCart(id){
        
    //   cart=JSON.parse(localStorage.getItem("carted"));
    
      for(let x=0;x<cart.length;x++){
          if(cart[x].productId===id){
            
              cart.splice(x,1);
              localStorage.setItem('totalQuan',JSON.stringify(
                updateCartQuantity()
              ));
              saveToStorage();
            //   localStorage.setItem("carted",JSON.stringify(cart));
              break;
          }
      }
  }
  
   
    
   
    export function updateDeliveryOptions(value){
        let ID=value.dataset.id;
        
        cart.forEach((val)=>{
            if(val.productId===ID){
                val.deliveryOptionsId=Number(value.dataset.deliveryId);
                saveToStorage();
            }
           });
        
        
        
      }

    export function updateCartQuantity(){
        
          let quantity=0;
  cart.forEach((value)=>{
    quantity+=value.quantity;
  });
  return quantity;
  
  
  }

    function saveToStorage(){
        localStorage.setItem("carted",JSON.stringify(cart));
    }