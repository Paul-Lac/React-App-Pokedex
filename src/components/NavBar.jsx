function NavBar({ pokemonList, pokemonIndex, setPokemonIndex }) {

const handleButton = (index) => {
    setPokemonIndex(index);
    if (index ===3) {
    alert("Pika pikachu !!!") }
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