import { useState } from "react"

export default function Team() {
    const teamStyles = {
        border: '2px solid #000000',
        padding: '40px'
        
    }
    const [team, countTeam] = useState(10);
    const handleAdd = () => {
        const playesr = team + 1;
        countTeam(playesr);
    }
    const handleRemove = () => {
        const players = team - 1;
        countTeam(players)
    }
    return (
        <div style={teamStyles}>
            <h1>Players:{team}</h1>
            <button onClick={handleAdd}>Add Players</button>
            <button onClick={handleRemove}>Add Players</button>
        </div>
    )
}