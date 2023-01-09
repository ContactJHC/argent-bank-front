import { useState } from "react";
import "./LoginForm.css"

export default function LoginForm() {
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const resetForm = () => {
        setUserName('')
        setPassword('')
    }
    return (
    <form className='login-form'>
        <label>
            <span>Username</span>
            <input type="text" onChange={
                (e) => setUserName(e.target.value)
            } />
        </label>
        <label>
            <span>Password</span>
            <input type="text" onChange={
                (e) => setPassword(e.target.value)
            }/>
        </label>
        <div className="input-remember">
            <label>
                <span>Remember me</span>
                <input type="checkbox"/>
            </label>
        </div>
        <button className="sign-in-button">Sign In</button>
        <p onClick={resetForm}>UserName : {userName} - Password : {password}
        Reset the form</p>
    </form>
    )
    }
