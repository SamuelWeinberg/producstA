// import { doapiBody, urlapi } from "./sarverApi";

export const personalAreaForm = () => {
    onSubmitLogin()
    $('#privateArea').validate({
        rules: {
            email: {
                required: true,
                email: true
            },
            pass: {
                required: true,
                minlength: 2
            }
        },
        submitHandler: (form) => {
            let bodyData = {
                email: $('#inputEmail').val(),
                pass: $('#inputPassword').val()
            }
            console.log(bodyData);
            // let url = urlapi + '/user/login';
            // doapiBody(url, "POST", bodyData)
            //     .then(data => {
            //         console.log(data);
            //     })
        }
    });
};

const onSubmitLogin = () => {
    $('#privateArea').on('submit', (e) => e.preventDefault())
}