import React, {useContext} from "react";
import FavoriteContext from "../contexts/favoritesContext";

const Pokemon = (props) => {
    const {favoritePokemons, updateFavoritePokemons} = useContext(FavoriteContext)
    const {pokemon} = props;
    
    const onHeartClick = () => {
        updateFavoritePokemons(pokemon.name)
    }
    const heart = favoritePokemons.includes(pokemon.name) ? "❤️" : "🖤";
    return (
        <div className={pokemon.types[0].type.name === 'grass' ? 'grass-type-card' : pokemon.types[0].type.name === 'fire' ? 'fire-type-card' : pokemon.types[0].type.name === 'poison' ? 'poison-type-card' : pokemon.types[0].type.name === 'water' ? 'water-type-card' : pokemon.types[0].type.name === 'normal' ? 'normal-type-card' : pokemon.types[0].type.name === 'flying' ? 'flying-type-card' : pokemon.types[0].type.name === 'electric' ? 'electric-type-card' : pokemon.types[0].type.name === 'dragon' ? 'dragon-type-card' : pokemon.types[0].type.name === 'fairy' ? 'fairy-type-card' : pokemon.types[0].type.name === 'bug' ? 'bug-type-card' : pokemon.types[0].type.name === 'ground' ? 'ground-type-card' : pokemon.types[0].type.name === 'rock' ? 'rock-type-card' : pokemon.types[0].type.name === 'fighting' ? 'fighting-type-card' : pokemon.types[0].type.name === 'psychic' ? 'psychic-type-card' : pokemon.types[0].type.name === 'ice' ? 'ice-type-card' : pokemon.types[0].type.name === 'ghost' ? 'ghost-type-card' : pokemon.types[0].type.name === 'steel' ? 'steel-type-card' : pokemon.types[0].type.name === 'dragon' ? 'dragon-type-card' : pokemon.types[0].type.name === 'dark' ? 'dark-type-card' : null}>
            <div className="pokemon-image-container">
                <img alt={pokemon.name} src={pokemon.sprites.front_default} className="pokemon-image"/>
            </div>
            <div className="card-body">
                <div className="card-top">
                    <h3> {pokemon.name}</h3>
                    <div>#{pokemon.id}</div>
                </div>
                <div className="card-bottom">
                    <div className="pokemon-type">
                        {pokemon.types.map((type, index) => {
                            return (
                                <div className={type.type.name === 'grass' ? 'grass-type' : type.type.name === 'fire' ? 'fire-type' : type.type.name === 'poison' ? 'poison-type' : type.type.name === 'water' ? 'water-type' : type.type.name === 'normal' ? 'normal-type' : type.type.name === 'flying' ? 'flying-type' : type.type.name === 'electric' ? 'electric-type' : type.type.name === 'dragon' ? 'dragon-type' : type.type.name === 'fairy' ? 'fairy-type' : type.type.name === 'bug' ? 'bug-type' : type.type.name === 'ground' ? 'ground-type' : type.type.name === 'rock' ? 'rock-type' : type.type.name === 'fighting' ? 'fighting-type' : type.type.name === 'psychic' ? 'psychic-type' : type.type.name === 'ice' ? 'ice-type' : type.type.name === 'ghost' ? 'ghost-type' : type.type.name === 'steel' ? 'steel-type' : type.type.name === 'dragon' ? 'dragon-type' : type.type.name === 'dark' ? 'dark-type' : null} key={index}>{type.type.name}</div>
                            )
                        })}
                    </div>
                    <button className="pokemon-heart-btn" onClick={onHeartClick}>
                        {heart}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Pokemon;