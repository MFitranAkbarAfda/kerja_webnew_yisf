import { useOutletContext, useParams } from "react-router"

export default function News() {
    const { id } = useParams();
    const obj = useOutletContext();
    return (
        <>
            <h1>
                News {id} {obj.hello}
            </h1>
        </>
    )
}
