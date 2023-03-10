
class ViewController {

    constructor() {
        window.addEventListener('hashchange', this.handleHashChange)
        window.addEventListener('load', this.handleHashChange)
        this.dunerManager = new DunerManager();
        this.cartManager = new CartManager();

    }

    handleHashChange = () => {
        console.log("handleHashChange");
        let hash = window.location.hash.slice(1) || "menu";

        const pageIds = ["menu", "cart", "order"];

        pageIds.forEach(id => {
            let page = document.getElementById(id);

            if(hash === id) {
                page.style.display = "block";
            } else {
                page.style.display = "none";
            }
        });

        switch (hash) {

            case "menu":
                this.renderMenuPage();
            case "cart":
                this.renderCartPage();
            case "order":
                this.renderOrderPage();
        }

    } 
    
    renderDuners = (dunerList, container) => {
        container.innerHTML = "";

        dunerList.forEach(duner => {

            let card = createElement('div');
            card.classList.add('card');


            let img = createElement('img');
            img.src = duner.image;
            img.width = 200;

            let name = createElement('div');
            name.innerText = duner.name;
            name.classList.add('name');

            let weight = createElement('div');
            weight.innerText = duner.weight+"гр.";
            weight.classList.add('weight');

            let category = createElement('div');
            category.innerText = duner.category;
            category.classList.add('category');

            let price = createElement('div');
            price.innerText = duner.price;
            price.classList.add('price');

            let inputCount = createElement('input');
            inputCount.type = "number";
            inputCount.value = 1;

            let addToCartBtn = createElement('button');
            addToCartBtn.addEventListener('click', () => {
                this.cartManager.addToCart(duner, Number(inputCount.value));
            })
            addToCartBtn.innerText = "Add to cart";

            card.append(
                img,
                name,
                weight,
                category,
                price,
                inputCount,
                addToCartBtn
            );
            
            container.appendChild(card);
        });


    }

    renderMenuPage = () => {

        let searchInput = document.getElementById('searchInput');



        searchInput.addEventListener('input',(event)=> {

            let result = this.dunerManager.search(event.target.value);

            console.log(result);
            this.renderDuners(result,dunerContainer);

        } )


        let dunerContainer = document.querySelector('#menu .container');
        this.renderDuners(this.dunerManager.dunerList,dunerContainer);

        

    }

    renderCartPage = () => {

        let cartPage = document.querySelector("#cart .container");

        cartPage.innerHTML = "";

        if(this.cartManager.cartItems.length) {
            let cartItemList = createElement('ol');
            let sum = this.cartManager.getTotalSum();
            this.cartManager.cartItems.forEach(cartItem => {
                
                let row = createElement('li');
    
                let name = createElement('span');
                name.innerText = cartItem.name;
    
                let price = createElement('span');
                price.innerText = cartItem.price;
    
                let inputCount = createElement('input');
                inputCount.type = "number";
                inputCount.value = cartItem.count;

                inputCount.addEventListener("input", (event) => {
                    console.log("Edit count...");
                    let newCount = Number(event.target.value);
                    this.cartManager.editCartItem(cartItem, newCount);
                    if(newCount === 0) {
                        row.parentElement.removeChild(row);
                    }  
                    document.getElementById('totalLabel').innerText = "Total: " +
                        this.cartManager.getTotalSum().toFixed(2);                  
                })
    
                let delBtn = createElement('button');

                delBtn.addEventListener('click', () => {
                    this.cartManager.editCartItem(cartItem, 0);
                    row.parentElement.removeChild(row);
                    document.getElementById('totalLabel').innerText = "Total: " +
                        this.cartManager.getTotalSum().toFixed(2);
                })
                delBtn.innerText = "X";
    
                row.append(
                    name, 
                    price,
                    inputCount,
                    delBtn
                );
    
                cartItemList.appendChild(row);
            })
    
            cartPage.append(cartItemList);
            
            let orderInfo = createElement('div');

            let label = createElement('span');
            label.innerText = `Total: ${sum.toFixed(2)}`;
            label.id = 'totalLabel';

            let orderBtn = createElement('button');
            orderBtn.innerText = "Order";
            orderBtn.addEventListener('click', () => {
                location.hash = "order";
            });

            orderInfo.append(label, orderBtn);

            cartPage.append(orderInfo);


        } else {
            cartPage.append(createElement('p').innerText = "Nema nikoi");
        }

       


    }

    submitForm = (event) => {
        console.log("Submit");
        event.preventDefault();
        this.cartManager.deliver(event.currentTarget.address.value);
    }

    renderOrderPage = () => {

        let deliveryForm = document.getElementById('deliveryForm');

        deliveryForm.removeEventListener('submit', this.submitForm);

        deliveryForm.addEventListener('submit', this.submitForm)

    }

}

let viewController = new ViewController();