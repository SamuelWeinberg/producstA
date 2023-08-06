import { data  } from "./app.js";
import { showDetails } from "./details.js";
import Prodcuts from "./prodcuts.js";

let category, inputText;

export const createProdcuts = () => {
    $('#row').empty();
    data.filter(item => (!category || (item.category == category)) && (!inputText || (item.name.includes(inputText))))
        .forEach(item => new Prodcuts("#row", item).render());
    viewEvents();
}

const filter = () => {
    inputText = $("#myInput").val();
    createProdcuts();
}

function search () {
    category = $(this).val();
    createProdcuts()
};

export const viewEvents = () => {
    $("#myInput").off("input").on("input", filter);
    $('#searchValue').off("change").on("change", search);
    $('.btnDetails').off('click').on("click", showDetails);
}

   
   


