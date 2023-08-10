import { doApiBody, urlapi } from "./sarverApi.js";

export const signUserdb = () => {
    $('#sinUpUser').validate({
        rules: {
            name:{
                required: true,
                minlength: 4
            },
            email: {
                required: true,
                email: true
            },
            pass: {
                required: true,
                minlength: 3
            },
        },
        submitHandler: (form) => {
            let bodyData = {
                email: $('#inputEmailUser').val(),
                pass: $('#inputPasswordUser').val(),
                name: $('#inputName').val(),
                role: 'admin',
            }
            let url = urlapi + '/user/add';
            doApiBody(url, "POST", bodyData)
                .then(data => {
                    console.log(data);
                })
                $("#sinUpUser").css("display", "none");
                $("#privateArea").css("display", "flex")
        }
    });
};
