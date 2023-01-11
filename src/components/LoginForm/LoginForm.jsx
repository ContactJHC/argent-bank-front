import { Link } from "react-router-dom"
import { useState } from "react"
import "./LoginForm.css"
// import { useDispatch, useSelector } from "react-redux"
import { postLogin } from "../../services/services"


export default function LoginForm() {
  
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [isRememberChecked, setIsRememberChecked] = useState(false)
    let [token, setToken] = useState('')

    return (
    <form className='login-form'>
        <label>
            <span>Username</span>
            <input 
                type="text" 
                id="usernameInput"
                onChange={(e) => {setUserName(e.target.value)} }
                value={userName}
                required
                autoComplete="tony@stark.com"
            />
        </label>
        <label>
            <span>Password</span>
            <input 
                id="passwordInput"
                type="text" 
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                required
                autoComplete="password123"
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
        <button type="submit"
            style={{display:'none'}}></button>
        <Link 
            to={"/user"} 
            className="sign-in-button" 
            onClick={
                async () => {
                    // let token = await postLogin('iu','ui')
                    token = await postLogin(userName, password)
                    setToken(token)
                    console.log(token)
                }
            }
        >
            Sign In
        </Link>
        
    </form>
    )
    }
