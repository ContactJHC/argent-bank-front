import { Link } from "react-router-dom"
import { useState } from "react"
import "./LoginForm.css"
import { useDispatch, useSelector } from "react-redux"


export default function LoginForm() {
  
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [isRememberChecked, setIsRememberChecked] = useState(false)

    return (
    <form className='login-form'>
        <label>
            <span>Username</span>
            <input 
                type="text" 
                onChange={(e) => {setUserName(e.target.value)} }
                value={userName}
                required
            />
        </label>
        <label>
            <span>Password</span>
            <input 
                type="text" 
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                required
            />
        </label>
        <div className="input-remember">
            <label>
                <span>Remember me</span>
                <input 
                    type="checkbox"
                    onClick={(e) => {
                        setIsRememberChecked(!isRememberChecked)
                    }}
                    
                />
            </label>
        </div>
        <Link 
            to={"/user"} 
            className="sign-in-button" 
            onClick={
                () => {
                    console.log('user email : ', userName, 'user password : ', password);
                }
            }
        >
            Sign In
        </Link>
        
    </form>
    )
    }
