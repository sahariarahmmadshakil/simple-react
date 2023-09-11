import { useEffect, useState } from "react";

export default function Users() {
    const [users, setusers] = useState([]);
    useEffect(() => {
        const loadData = async () => {
            const res = await fetch('https://jsonplaceholder.typicode.com/users');
            const getPhone = await res.json();
            setusers(getPhone);


        }
        loadData()
    }, []);

    return (
        <div>
            <h1>Users { users.length}</h1>
        </div>
    );
}