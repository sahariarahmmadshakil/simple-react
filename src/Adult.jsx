export default function Adult({ website }) {
    const { name, id, types } = website;
    return (
        <div>
            <h3>This is {name}</h3>
            <h4>Id {id}</h4>
            <h4>This is {types}</h4>
        </div>
    )
}