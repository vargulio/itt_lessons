class RegisterController {

    constructor(userManager) {
        this.userManager = userManager;
    }


    render = () => {

        let form = getEl('registerForm');

        form.onsubmit = (event) => {
            event.preventDefault();

            const {
                username: {value: username}, 
                password: {value: password}, 
                confirmPass: {value: confirmPass}
            } = event.currentTarget;
            
            this.userManager.register(username, password)
            .then(data => {
                location.hash = 'login';
            })
            .catch(error => {
                alert(error);
            });
        }


    }

}