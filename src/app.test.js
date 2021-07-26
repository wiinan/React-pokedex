import { combineReducers } from "redux";
import pokemonListReducer from "./container/pokemonListReducer";
import PokemonMultipleReducer from "./container/pokemonMultipleReducer";

const RootReducer = combineReducers({
    PokemonList: pokemonListReducer,
    pokemon: PokemonMultipleReducer
});

export default RootReducer;
