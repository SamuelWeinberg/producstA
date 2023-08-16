import {  showCartUser } from "./cart/cart.js";
import { doApiBody, urlapi } from "./sarverApi.js";

export const personalAreaForm = () => {
    $('#privateArea').validate({
        rules: {
            email: {
                required: true,
                email: true
            },
            pass: {
                required: true,
                minlength: 3
            }
        },
        submitHandler: (form) => {
            let bodyData = {
                email: $('#inputEmail').val(),
                pass: $('#inputPassword').val()
            }
            let url = urlapi + '/user/login';
            doApiBody(url, "POST", bodyData)
                .then(data => {
                    localStorage.setItem('name',data.name)
                    localStorage.setItem("token",data.token)
                    showCartUser()
                })
                $("#privateArea").css("display", "none")
                // userName()   
        }
    });
};
