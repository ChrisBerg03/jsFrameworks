import { useParams } from "react-router-dom";

export function SpecificProfile() {
    const { name } = useParams();
    console.log(name);

    return <p>Your cool name is {name}</p>;
}
