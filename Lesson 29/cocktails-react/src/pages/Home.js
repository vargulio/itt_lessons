import React from "react";
import CocktailCard from "../components/CocktailCard";
import cocktailManager from "../services/CocktailManager";
import "./Home.css";

export default class HomePage extends React.Component {

    state = {
        cocktailOfTheDay: null,
        favorites: []
    }


    // lifecycle hook
    componentDidMount() {
        cocktailManager.getCocktailOfTheDay().then(cocktailOfTheDay => {
            this.setState({ cocktailOfTheDay });
        });
        cocktailManager.getFavorites().then(favorites => {
            this.setState({ favorites: favorites || [] })
        });
    }

    handleFavoriteToggle = (id) => {
        console.log('handleFavoriteToggle', id);

        const favIndex = this.state.favorites.findIndex(cocktail => cocktail.id === id);

        if (favIndex === -1) {
            cocktailManager.addToFavorites(id)
                .then(res => {
                    return cocktailManager.getCocktailDetails(id);
                })
                .then(cocktailData => {
                    this.setState((previousState) => {
                        const favorites = {
                            favorites: [...previousState.favorites, cocktailData]
                        };
                        return favorites;
                    });
                })
        } else {

            cocktailManager.removeFromFavorites(id).then(res => {
                console.log(res);
                // This doesn't work
                // this.state.favorites.splice(favIndex,1);


                this.setState((previousState) => {
                    const favorites = [...previousState.favorites];
                    favorites.splice(favIndex, 1);

                    return {
                        favorites
                    }
                });

            })
        }

    }

    isFavorite = (id) => {
        return this.state.favorites.findIndex(cocktail => cocktail.id === id) !== -1;
    }


    render() {
        return <>
            {this.state.cocktailOfTheDay ?
                <CocktailCard
                    isFavorite={this.isFavorite(this.state.cocktailOfTheDay.id)}
                    onToggleFavorite={this.handleFavoriteToggle}
                    cocktail={this.state.cocktailOfTheDay}
                /> : null
            }
            <h2>Favorites section:</h2>
            {
                this.state.favorites.length ?
                    <div className="cocktailContainer">
                        {this.state.favorites.map(cocktail => <CocktailCard
                            key={cocktail.id}
                            isFavorite="true"
                            cocktail={cocktail}
                            onToggleFavorite={this.handleFavoriteToggle}
                        />)}
                    </div> : <div>No favorites yet!</div>
            }

        </>
    }

}