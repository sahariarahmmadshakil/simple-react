import { useEffect, useState } from "react"
import './Friends.css'
import Friend from "./Friend";
export default function Friends() {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        const loadData = async () => {
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            const getResponse = await response.json();
            setUsers(getResponse)
        }
        loadData()
    }, []);

    return (

        <div className="box">
            <h1>Friends {users.length}</h1>
            {
                users.map(user=><Friend user={user}></Friend>)
            }
        </div>
    )
}
