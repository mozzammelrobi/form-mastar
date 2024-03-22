import { useState } from "react";


const StatefulForm = () => {
    const [name, setName]= useState('mozzammel')
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)
    const [error, setError] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()

        if(password.length < 6){
            setError('passwoerd must be 6 charecter or longer')
        }else{
            setError('')
            console.log(name,email, password)
        }


    }

    const handleNameChange = e => {
        setName(e.target.value)
    }

    const handleEmailChange = (e) => {
        // console.log(e.target.value)
        setEmail(e.target.value)
    }

    const handlePasswordChange = e => {
        setPassword(e.target.value)
    }
    return (
        <div>
             <form onSubmit={handleSubmit}>
                <input
                onChange={handleNameChange}
                value={name}
                type="text" name="name" /><br />
                <input
                onChange={handleEmailChange} 
                type="email" name="email" id="" /> <br />
                <input 
                 onChange={handlePasswordChange}
                type="password" name="password" id="" />
                <br />
                
                <input type="submit" value="submit" />
                {
                    error && <p>{error}</p>
                }
            </form>
        </div>
    );
};

export default StatefulForm;