// import { doApiGet, urlapi } from "../sarverApi.js";

// let data = []

// export const renderUserCart = () => {
//   // $('#listProdcts').empty(); 
//   // data.forEach(({ data, quantity}) => {
//   //   const cartItem = dataHTM(data, quantity)
//   //   $('#listProdcts').append(cartItem);
//   // });
//   // $('#idCount').html(data.length);
//   // if (data.length > 0) {
//   //   $('.count').css('display', 'flex');
//   // } else {
//   //   $('.count').css('display', 'none');
//   // }
//   viewEventsUser()
// }

// export const showUserCartdb  = () => {
//   let url = urlapi + '/cart/userProducts';
//   doApiGet(url)
//     .then(data => {
//       if (Array.isArray(data)) {
//         console.log(data);
//         data.forEach(data => {
//           const quantity = data.quantity;
//           const dataHTML = `
//               <div class="border cartProdcuts p-2 d-flex justify-content-between">
//                 <div>
//                   ${data.name}
//                   <i class="fa fa-trash remove-item" data-id="${data.id}"></i>
//                   <div class="d-flex">
//                     <button class="btn-dark plus-btn" data-id="${data.id}">+</button>
//                     <input type="number" min="1" value="${quantity}" class="cart-quantity-input">
//                     <button class="btn-dark minus-btn" data-id="${data.id}">-</button><br>
//                   </div>
//                 </div>
//               </div>
//             `;
//         });
//       }
//     })
//     .catch(error => {
//       console.error( error);
//     });
// };

// export const addToCartUesr = (data, quantity) => {
//   const existingProduct = data.find(item => item.data.id == data.id);
//   if (existingProduct) {
//     existingProduct.quantity += quantity;
//   } else {
//    data.push({ data, quantity });
//   }
//   renderUserCart();
// }

// const viewEventsUser = () => {
//   $('.plus-btn').off('click').on('click', e => changeQuantity(e, 1)); 
//   $('.minus-btn').off('click').on('click', e =>  changeQuantity(e, -1));
//   $('.remove-item').off('click').on('click', removeItem);
//   $('#cartIcon').off('click').on('click', () => $('#cartModal').css('display', 'flex'));
//   $('#checkoutButton').off('click').on('click', () => $('#cartModal').css('display', 'none'));
// }

// const removeItem = (e)=> {
//   const id = $(e.target).data("id");
//   const index = data.findIndex(item => item.data.id == id);
//   data.splice(index, 1);
//   renderUserCart();
// }

// const changeQuantity = (e, quantity) => {
//   const id = $(e.target).data("id");
//   const cartItem = data.find(item => item.data.id == id);
//   if(!(cartItem.quantity + quantity))
//     return;
//   cartItem.quantity += quantity;
//   renderUserCart();
// }
