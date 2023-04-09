import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Joke from "../Joke/Joke";

export default function NestedComponent() {

    const [categories] = useState(["animal", "career", "celebrity", "dev", "explicit", "fashion", "food", "history", "money", "movie", "music", "political", "religion", "science", "sport", "travel"]);
    const [currentCategory, setCurrentCategory] = useState('animal');

    // state = {
    //     categories: 
    //     currentCategory: 'animal'
    // }

    // intervalId;

    // fires only once when the component renders for the first time
    // componentDidMount() {
    //     this.intervalId = setInterval(() => {
    //         const randomCategory = this.state.categories[Math.floor(Math.random()*this.state.categories.length)];
    //         this.setState({currentCategory: randomCategory});
    //     }, 1000)        
    // }

    useEffect(() => {
        const intervalId = setInterval(() => {
            console.log('I run');
            const randomCategory = categories[Math.floor(Math.random() * categories.length)];
            // this.setState({currentCategory: randomCategory});
            setCurrentCategory(randomCategory);
        }, 1000)

        return () => {
            clearInterval(intervalId);
        }

    }, [])

    // fires only once when the component will be removed from the screen
    // componentWillUnmount() {
    //     // this is the moment when we have to clean-up
    //     clearInterval(this.intervalId);
    // }

    return <>
        {/* The outlet configures where the nested components should be rendered */}
        <Joke category={currentCategory} />
        <Outlet />
    </>


}