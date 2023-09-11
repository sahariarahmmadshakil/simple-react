import { useState } from "react"

export default function Counter() {
    const styles = {
        border: '2px solid red',
        padding: '20px',
        borderRadius:'15px'
    }
    const [count, setCount] = useState(0);
    const handleCount = () => {
        const newCount = count + 1;
        setCount(newCount);
       
    }
    const handleDecrease = () => {
        const decrease = count - 1;
        setCount(decrease);
    }
    return (
        <div style={styles}>
            <h1>Counter: {count}</h1>
            <button onClick={handleCount}>Increase</button>
            <button onClick={handleDecrease}>Decrease</button>
        </div>
    )
}