// export default function Todo({task}) {
//     return <div>
//         <h3>This is an to do list for { task}</h3>
//     </div>
// }
export default function Todo({task ,isDone}) {
    if (isDone === true) {
       return <li>This is {task} </li>
    } return <li> this is {task}</li>
}