function NavBar({ pokemonList, pokemonIndex, setPokemonIndex }) {

const handleButton = (index) => {
    setPokemonIndex(index);
}

{setPokemonIndex === 3 && alert("Pika pikachu !!!")}

return (
<div>
{pokemonList.map((pokemon, index) => (
<button key={pokemon.name} onClick={() => handleButton(index)}> {pokemon.name} </button>
))}
</div>
);
}

export default NavBar;