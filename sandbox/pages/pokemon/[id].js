import { useRouter } from 'next/router';

export default function DynamicId() {

    const router = useRouter();
    const { id } = router.query;

    return (
        <>
            <p>hello, I see you {id}</p>
        </>
    )
}