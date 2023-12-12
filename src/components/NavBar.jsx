function NavBar({ pokemonList, pokemonIndex, setPokemonIndex }) {

const handlePrevious = () => {
    setPokemonIndex(pokemonIndex - 1);
    }
    
const handleNext = () => {
setPokemonIndex(pokemonIndex + 1);
}

return (<div>
{pokemonIndex > 0 && <button onClick={handlePrevious}>Précédent</button>}
{pokemonIndex < pokemonList.length - 1 && <button onClick={handleNext}>Suivant</button>}
</div>)
};

export default NavBar;