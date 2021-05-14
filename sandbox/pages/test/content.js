export default function Test({ pokeProp }) {
    return (
        <>
            <p>hello from content</p>
            {!pokeProp ? <p>No prop from this path!</p> : <p>This is a prop I passed down from Pokemon Component: {pokeProp.pokemon}</p>}
        </>
    )
}