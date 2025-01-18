
let products=[
    product1={name:'Black and Gray Athletic Cotton Socks - 6 Pairs',
        image:'images/products/athletic-cotton-socks-6-pairs.jpg',
        rating:45,
        pitchRating:87,
        priceInCents:1090
    }
    ,product2={name:'Intermediate Size Basketball',
    image:'images/products/intermediate-composite-basketball.jpg',
    rating:40,
    pitchRating:127,
    priceInCents:2095
},
product3={name:'Adults Plain Cotton T-Shirt - 2 Pack',
    image:'images/products/adults-plain-cotton-tshirt-2-pack-teal.jpg',
    rating:45,
    pitchRating:56,
    priceInCents:799
}];
let save=document.querySelector(".products-grid");
// let h=document.createElement("h1");
// h.innerHTML="hello";
// save.appendChild(h);
// console.log(typeof h);
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
              src="images/ratings/rating-${value.rating}.png">
            <div class="product-rating-count link-primary">
              ${value.pitchRating}
            </div>
          </div>

          <div class="product-price">
            $${value.priceInCents/100}
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

          <button class="add-to-cart-button button-primary">
            Add to Cart
          </button>
        </div>`;
        
        save.innerHTML+=html;

});

