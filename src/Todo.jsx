// export default function Todo({task}) {
//     return <div>
//         <h3>This is an to do list for { task}</h3>
//     </div>
// }
// export default function Todo({task ,isDone}) {
//     if (isDone === true) {
//        return <li>This is {task} </li>
//     } return <li> this is {task}</li>
// }


// export default function Todo({ task, isDone }) {
//     return (
//       <li>
//         {isDone ? 'Course is done' : 'Course is not done'}: {task}
//       </li>
//     );
//   }
// export default function Todo({ task, isDone }) {
//     return (
//         <li>{task}{ isDone && ':Done'}</li>
//     );
// }
// export default function Todo({ task, isDone }) {
//     return (
//         <li>{task}{ isDone || ':Do it'}</li>
//     );
// }
export default function Todo({ task, isDone }) {
    let listItem;
    if (isDone) {
        listItem = <li>Yea!! finished { task}</li>
    } else {
        listItem = <li>Sorry not finished yet the { task}</li>
    }
    return listItem;
}
