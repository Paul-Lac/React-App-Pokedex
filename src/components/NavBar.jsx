function NavBar({ pokemonList, pokemonIndex, setPokemonIndex }) {

const handleButton = (index) => {
    setPokemonIndex(index);
}

return (
<div>
{pokemonList.map((pokemon, index) => (
<button key={pokemon.name} onClick={() => handleButton(index)}> {pokemon.name} </button>
))}
</div>
);
}

export default NavBar;