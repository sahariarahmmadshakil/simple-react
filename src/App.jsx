import './App.css'
import Todo from './Todo'
function App() {
  return (
    <>
      <Town name='Magura' situated='Vairab River'></Town>
      <Todo task='Learn React' isDOne={true}></Todo>
      <Todo task='False' isDOne={false}></Todo>
      <Todo task='Pe Pro' isDOne={true}></Todo>
    </>
  )
}

function Town({name,situated}) {
  return (
    <div>
      <h1> The Town Name Is: {name} </h1>
      <p>it is situtated near: <u>{situated}</u> it is really beautiful and also natural family </p>
    </div>
  )
}

export default App
