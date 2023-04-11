import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { Cocktail } from "../services/CocktailManager";

const initialState = {
    profilePic: 'https://upload.wikimedia.org/wikipedia/commons/3/30/Chuck_Norris_May_2015.jpg',
    username: '',
    randomCocktail: '',
    isRandomCocktailLoading: false,
    error: ''
}

// First, create the thunk
export const fetchRandom = createAsyncThunk(
    'users/fetchRandomCocktail',
    async () => {
      const response = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/random.php');
      return new Cocktail(response.data.drinks[0]);
    }
);

export const profileSlice = createSlice({

    name: 'profileSlice',
    initialState,
    reducers: {
        changeProfilePic: (state, action) => {
            state.profilePic = action.payload;
        },
        changeUserName: (state, action) => {
            state.username = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchRandom.fulfilled, (state, action) => {
            state.randomCocktail = action.payload;
            state.isRandomCocktailLoading = false;
        });
        builder.addCase(fetchRandom.rejected, (state, action) => {
            state.error = action.payload;
            state.isRandomCocktailLoading = false;
        });
        builder.addCase(fetchRandom.pending, (state, action) => {
            state.isRandomCocktailLoading = true;
        });
    }
})
// action creators
export const { changeProfilePic, changeUserName } = profileSlice.actions;

export default profileSlice.reducer;

