class ViewController {

    constructor() {
        window.addEventListener('load', this.handleHashChange);
        window.addEventListener('hashchange', this.handleHashChange);
        this.userManager = new UserManager();
        this.partiesManager = new PartiesManager();
        
        this.registerController = new RegisterController(this.userManager);
        this.loginController = new LoginController(this.userManager);
        this.listingsController = new ListingsController(this.partiesManager);
    }

    handleHashChange = (e) => {
        const hash = location.hash.slice(1) || PAGE_IDS[0];

        if (!PAGE_IDS.includes(hash)) {
            location.hash = '404';
            return;
        }

        PAGE_IDS.forEach(pageId => {
            let element = getEl(pageId);
            hash === pageId ? element.style.display = 'block' :
                element.style.display = 'none';
        })

        switch (hash) {
            case 'register':
                this.registerController.render();
                break;
            case 'login':
                this.loginController.render();
                break;
            case 'listings':
                this.listingsController.render();
                break;
        }

    }

}

let viewController = new ViewController();
