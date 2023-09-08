import './App.css'

function App() {
  return (
    <>
      <Student></Student>
      <Student></Student>
      <Student></Student>
      <Student></Student>
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
function Student() {
  return <div>
    <h3 className='student'>I am Student</h3>
  </div>
}
function Device(props) {
  // console.log(props)
  return (
    <h2>This is a : {props.name} and its price is {props.price} </h2>
  )
}

export default App
