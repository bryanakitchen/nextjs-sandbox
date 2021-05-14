import Test from "../test/content";
import Head from 'next/head';

// getStaticProps tells next to prerender the page
export async function getStaticProps() {
    const req = await fetch(`https://pokedex-alchemy.herokuapp.com/api/pokedex`);
    const pokemonArray = await req.json();

    // const pokePaths = pokemon.results.map(poke => {
    //     return { params: { id: poke } }
    // })

    return {
        props: {
            pokemonArray,
        },
        // revalidate: 5
        // revalidate allows you to re-generate page per seconds
    }
}


export default function PokemonDoesThisHaveToMatch({ pokemonArray }) {

    return (
        <>
            <Head>
                <title>Pokemon Page</title>
            </Head>
            <h1>hello from Pokemon</h1>

            <h2>First Pokemon is</h2>
            <h3>{pokemonArray.results[0].pokemon}</h3>
            <img src={pokemonArray.results[0].url_image} alt='image of venausaur' width='300' />

            <Test pokeProp={pokemonArray.results[0]} />
        </>
    )
}