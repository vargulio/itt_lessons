class LoginController {

    constructor(userManager) {
        this.userManager = userManager;
    }


    render = () => {

        let form = getEl('loginForm');

        form.onsubmit = (event) => {
            event.preventDefault();

            const {
                username: {value: username}, 
                password: {value: password}
            } = event.currentTarget;
            
            this.userManager.login(username, password)
            .then(data => {
                location.hash = 'listings';
            })
            .catch(error => {
                alert(error);
            });
        }


    }

}