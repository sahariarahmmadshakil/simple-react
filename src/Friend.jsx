import './Friends.css'
export default function Friend({ user }) {
    console.log(user.address.city)
    const { name, email, phone } = user;
   
    return (
        <div className='box'>
           <h3>Name: {name}</h3>
            <h3>Email: {email}</h3>
            <h3>Phone: {phone} </h3>
           
           
        </div>
    )
}