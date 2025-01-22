const h=new XMLHttpRequest();
 
let woah;
h.addEventListener('load',()=>{
     console.log(JSON.parse(h.response));

});
h.open('GET','https://supersimplebackend.dev/products');
h.send();