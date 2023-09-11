export default function Person(param) {
    console.log(param)
    const { name, age } = param;
    return (
        <>
            <h3>This is Person {name}</h3>
            <h3>He is {age} years old</h3>
            
        </>
    )
}