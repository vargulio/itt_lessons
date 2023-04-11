import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRandom } from '../store/profileSlice';
import cocktailManager from '../services/CocktailManager';
import CocktailCard from '../components/CocktailCard';


const HomePage = () => {
    const [favorites, setFavorites] = useState([]);

    const dispatch = useDispatch();
    const cocktailOfTheDay = useSelector(state => state.profile.randomCocktail);

    useEffect(() => {
        dispatch(fetchRandom());
        cocktailManager.getFavorites().then(favs => {
            setFavorites(favs || []);
        });
    }, [dispatch]);

    const handleFavoriteToggle = (id) => {
        const favIndex = favorites.findIndex(cocktail => cocktail.id === id);

        if (favIndex === -1) {
            cocktailManager.addToFavorites(id)
                .then(() => cocktailManager.getCocktailDetails(id))
                .then(cocktailData => {
                    setFavorites(prevFavorites => [...prevFavorites, cocktailData]);
                });
        } else {
            cocktailManager.removeFromFavorites(id).then(() => {
                setFavorites(prevFavorites => {
                    const updatedFavorites = [...prevFavorites];
                    updatedFavorites.splice(favIndex, 1);
                    return updatedFavorites;
                });
            });
        }
    };

    const isFavorite = (id) => {
        return favorites.findIndex(cocktail => cocktail.id === id) !== -1;
    };

    return (
        <>
            {cocktailOfTheDay ? (
                <CocktailCard
                    isFavorite={isFavorite(cocktailOfTheDay.id)}
                    onToggleFavorite={handleFavoriteToggle}
                    cocktail={cocktailOfTheDay}
                />
            ) : null}
            <h2>Favorites section:</h2>
            {favorites.length ? (
                <div className="cocktailContainer">
                    {favorites.map(cocktail => (
                        <CocktailCard
                            key={cocktail.id}
                            isFavorite={true}
                            cocktail={cocktail}
                            onToggleFavorite={handleFavoriteToggle}
                        />
                    ))}
                </div>
            ) : (
                <div>No favorites yet!</div>
            )}
        </>
    );
};

export default HomePage;
