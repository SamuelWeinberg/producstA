import { createProdcuts } from "./MangerProdcuts.js";
import { renderCart,showPersonalArea } from "./cart/cart.js";
import { viewEvents as detailsViewEvents } from "./details.js";

$(() => {
   init();
});

export const data = [];

const init = () => {
   detailsViewEvents();
   renderCart();
   createApi()
   showPersonalArea()
}

const createApi = () => {
   // let myjson = "/JavaScript/products.json";
   // let url = "http://localhost:3000/products";
   // let url = "http://localhost:27017/products.users";
   let url = "http://localhost:3000/products";
   fetch(url)
      .then(res => res.json())
      .then(res => {
         data.splice(0, data.length -1, ...res)
         createProdcuts(res);
      })
}