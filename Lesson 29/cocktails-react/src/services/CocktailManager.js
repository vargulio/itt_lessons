import axios from "axios";

export class Cocktail {

    constructor(cocktail) {

        const ingredients = Object.keys(cocktail)
            .filter(key => key.startsWith('strIngredient') && !!cocktail[key])
            .map(key => cocktail[key]);

        this.name = cocktail.strDrink;
        this.id = cocktail.idDrink;
        this.image = cocktail.strDrinkThumb;
        this.ingredients = ingredients;

    }
}

class CocktailManager {

    getCocktailOfTheDay() {
        return axios.get('https://www.thecocktaildb.com/api/json/v1/1/random.php')
            .then(res => {
                return new Cocktail(res.data.drinks[0]);
            });
    }

    getFavorites() {
        return axios.get('http://localhost:8080/favorite-cocktails', {headers: {
            'identity': '6422c4c6457f76de0ef3547c'
        }})
        .then(response => Promise.all(response.data.favorites.map(id => this.getCocktailDetails(id))))
    }

    getCocktailDetails(id) {
        return axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
        .then(response => {
            return new Cocktail(response.data.drinks[0]);
        })
    }

    addToFavorites(id) {
        return axios.post('http://localhost:8080/favorite-cocktails', { id }, {
            headers: {
                'identity': '6422c4c6457f76de0ef3547c'
            }
        }).then(res => {
            console.log(res);
        })
    }

    removeFromFavorites(id) {
        return axios.delete('http://localhost:8080/favorite-cocktails', {
            headers: {
                'identity': '6422c4c6457f76de0ef3547c',
                'cocktailId': id
            }
        }).then(res => {
            console.log(res);
        })
    }



}

let cocktailManager = new CocktailManager();

export default cocktailManager;