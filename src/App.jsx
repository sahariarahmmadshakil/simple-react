import './App.css';
import Todo from './Todo';
import Person from './Person';
import Adult from './Adult';
function App() {
  // const actors = ['Mia Kkalifa', 'Mia Malkova', 'Lina Paul', 'Sunny Leoni'];
  const websites = [
    { id: 1, name: 'Google', types: 'Search Engine' },
    { id: 2, name: 'Quora', types: 'Blog' },
    { id: 3, name: 'Stack Overflow', types: 'Coding QNA' },
    { id: 4, name: 'Youtube', types: 'video Streaming' }
  ];
  return (
    <>
      <h1>This is for Practice Purpse</h1>

      {
        websites.map(website=><Adult website={website}></Adult>)
      }

      {/* <Town name='Magura' situated='Vairab River'></Town>
      <Todo task='Learn React' isDone={true}></Todo>
      <Todo task='False' isDone={false}></Todo>
      <Todo task='Pe Pro' isDone={true}></Todo> */}
      {/* <Person name='Danni Daniels'></Person>
      {
        actors.map(actor => <Person param={actor}></Person>)
      } */}
    </>
  )
}

// function Town({ name, situated }) {
//   return (
//     <div>
//       <h1> The Town Name Is: {name} </h1>
//       <p>it is situtated near: <u>{situated}</u> it is really beautiful and also natural family </p>
//     </div>
//   )
// }

export default App
