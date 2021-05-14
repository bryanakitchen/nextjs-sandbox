import Test from "../test/content";

export async function getStaticProps() {
    const req = await fetch(`https://pokedex-alchemy.herokuapp.com/api/pokedex`)
    const pokemon = await req.json();

    return {
        props: { pokemon },
    }
}


export default function PokemonDoesThisHaveToMatch({ pokemon }) {
    // console.log(pokemon.results[0]);

    return (
        <>
            <h1>hello from Pokemon</h1>

            <h2>First Pokemon is</h2>
            <h3>{pokemon.results[0].pokemon}</h3>
            <img src={pokemon.results[0].url_image} alt='image of venausaur' width='300' />

            <Test pokeProp={pokemon.results[0]} />
        </>
    )
}