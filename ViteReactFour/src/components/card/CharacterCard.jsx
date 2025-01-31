export function CharacterCard({name, imageUrl}) {
    return (
    <div>
        <p>{name}</p>
        <img src={imageUrl}/>
    </div>
)
}