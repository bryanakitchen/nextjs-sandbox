import { useRouter } from 'next/router';

export async function getServerSideProps({ params }) {
    const reqItem = await fetch(`https://pokedex-alchemy.herokuapp.com/api/pokedex?pokemon=${params.name}`);
    const data = await reqItem.json();

    return {
        props: {
            pokeItem: data
        },
    }
}

export default function DynamicId({ pokeItem }) {

    const router = useRouter();
    const { name } = router.query;

    return (
        <>
            <p>hello, you entered: <em>{name}</em></p>
            { !pokeItem.results[0]
                ? <p>No poke by that name.</p>
                :
                <>
                    <p>First poke by that name: {pokeItem.results[0].pokemon}</p>
                    <img src={pokeItem.results[0].url_image} alt={pokeItem.results[0].pokemon} />
                </>
            }

        </>
    )
}