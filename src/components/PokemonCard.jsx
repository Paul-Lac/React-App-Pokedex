

function PokemonCard(props) {
    console.log(props);
    return (
    <figure> {props.pokemon.imgSrc !== undefined ? <img src={props.pokemon.imgSrc} alt="Bulbasaur" /> : <p>???</p>}
        <figcaption>{props.pokemon.name}</figcaption>
    </figure>
    );
}

export default PokemonCard;

