
const products = [
  { id: 1, name: "P1", price: 25 },
  { id: 2, name: "P2", price: 45 },
  { id: 3, name: "P3", price: 30 },
];
const cart = {};
const addToCart = (id) => {
  const score={};
  // score["maths"]=95
  // //score["maths"]+=2
  // console.log(score);
  if(cart[id]>=1){
      increment(id)
  }else if(!cart[id]){
  cart[id] = 1;
  console.log(cart);
  showCart();
}
};
const increment  =(id) =>{
  cart[id]+=1;
  showCart();
};
const decrement  =(id) =>{
  cart[id]-=1;
  cart[id]<1 && delete cart[id];
  console.log(cart);
  showCart();
};
const showTotal = () => {
  let tot=products.reduce((sum,value) => {
      if(cart[value.id]){
          return sum +  value.price * cart[value.id]  ;
  }
  return sum;
       
},0);
divtot.innerHTML="Total Order amount"+":"+tot
}
const showCart = () => {
  let str = "";
  products.map((value) => {2
    if (cart[value.id]) {
      str += `
      <li>${value.name}-$${value.price}-<button onclick='decrement(${value.id})'>-</button>${cart[value.id]}<button onclick='increment(${value.id})'>+</button>-${value.price*cart[value.id]}</li>
      `;
    }
  });
  divCart.innerHTML = str;
  let count=Object.keys(cart).length;
  items.innerHTML=count;
  showTotal();

};
const displaycart = () =>
{
//   divcartblock.style.display="block";
  divcartblock.style.left="80%";

}
const hidecart =() =>{
//   divcartblock.style.display="none";
  divcartblock.style.left="100%";

}
const showProducts = () => {
  let str = "";
  products.map((value) => {
    str += `
    <li>${value.id}-${value.name}-${value.price}-<button onclick=addToCart(${value.id})>Add to Cart</button></li>
    `;
  });
  divProducts.innerHTML = str;
};

//   const tot=score.reduce((sum,value) => sum + value);
//   console.log(tot);