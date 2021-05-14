export default function Test({ pokeProp }) {
    return (
        <>
            <p>hello from content</p>
            <p>This is a prop I passed down from Pokemon Component: {pokeProp.pokemon}</p>
        </>
    )
}