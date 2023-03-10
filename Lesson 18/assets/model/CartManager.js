class CartItem {
    constructor(name, price, count) {
        this.name = name;
        this.price = price;
        this.count = count;        
    }
}

class HistoryItem {
    constructor(productList,address){

        this.date = new Date().toLocaleDateString(); 
        this.address = address;

        this.productList = productList.map( item => `${item.name} ${item.count}`).join(',');

        this.total = productList.reduce((acc, cartItem) => acc+(cartItem.price * cartItem.count), 0);
    }
}


class CartManager {


    cartItems = [];
    orderHistory = [];

    addToCart = (duner, count) => {
        let dunerInCart = this.cartItems.find(cartItem => cartItem.name === duner.name);

        if(dunerInCart) {
            dunerInCart.count+=count;
        } else {
            this.cartItems.push(new CartItem(duner.name, duner.price, count));
        }
    }

    editCartItem = (cartItem, newCount) => {
        if(newCount === 0) {

            let index = this.cartItems.findIndex(item => item.name === cartItem.name);

            this.cartItems.splice(index, 1);

        } else {
            cartItem.count = newCount;

        }
    }

    getTotalSum = () => {
        return this.cartItems.reduce((acc, cartItem) => acc+(cartItem.price * cartItem.count), 0);
    }

    deliver = (address) => {
        this.orderHistory.push(new HistoryItem(this.cartItems,address ));
    }

}