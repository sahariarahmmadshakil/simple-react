import './App.css'

function App() {
  return (
    <>
      <Student grade='A+' score='3.75'></Student>
      <Student grade="A-" score="5.42"></Student>
      <Student grade="D" score="3.20"></Student>
      <Student ></Student>
      <Device name="Laptop" price="12000"></Device>
      <Device name="Phone" price='5000'></Device>
      <Device name='watch' price='2500'></Device>
    </>
  )
}

function Person() {
  const name = 'Shakil'
  const age = 20;
  const parents = { name: 'Akbor Ali', age: 25 };
  return (
    <h3>I am {name}. I am {age}   years old. My father name is {parents.name} </h3>
  );
}
function Student({grade=0, score=0}) {
    return <div>
    <h3 className='student'>I am Student. I got {grade} Also my Score is {score} </h3>
  </div>
}
function Device(props) {
  // console.log(props)
  return (
    <h2>This is a : {props.name} and its price is {props.price} </h2>
  )
}

export default App
