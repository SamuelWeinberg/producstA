import { data } from "./app.js";
import { addToCart } from "./cart/cart.js";


const quantityInput = $('#quantity');
const addToCartBtn = $('#btnAddCart');
const minusBtn = $('#minusBtn');
const plusBtn = $('#plusBtn');
const clasBtn = $('#btnDarkClas')
let selectedProduct = '';
let quantity = 1;

export const showDetails = (e) => {
    const product = data.find(p => p.id == e.target.id);
    quantity = 1;
    quantityInput.val(quantity);
    $('.dark').fadeIn(1000).css("display","flex");
    $('#name').html(product.name);
    $('#ingDark').attr("src", product.img);
    $('#price').html("price: "+ product.price);
    $('#deadline').html("deadline: " + product.deadline);
    $('#Description').html("Description: " + product.Description);
    selectedProduct = product;

}

export const viewEvents = () =>{
  addToCartBtn.on('click', () => addToCart(selectedProduct, quantity));
  plusBtn.on('click', () => quantityInput.val(++quantity)); 
  minusBtn.on('click', () => quantityInput.val(--quantity || ++quantity));
  clasBtn.on('click',() => $('.dark').fadeOut(1000));
  $('#btnAddCart').on('click',()=> $('.dark').fadeOut(1000));
}

