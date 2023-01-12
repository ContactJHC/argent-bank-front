import { Link, redirect } from "react-router-dom"
import { useState } from "react"
import "./LoginForm.css"
import { useDispatch } from "react-redux"
import * as services from "../../services/services"
import store from "../../store"


export default function LoginForm() {
    const dispatch = useDispatch()
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [isRememberChecked, setIsRememberChecked] = useState(false)
    let [token, setToken] = useState('')
    const [isLogged, setIsLogged] = useState(false)

    return (
    <form className='login-form'>
        <label className="input-wrapper">
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
        <label className="input-wrapper">
            <span>Password</span>
            <input 
                id="passwordInput"
                type="password" 
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                required
                autoComplete="password123"
            />
        </label>
        <div className="input-remember">
            <label>
                <input 
                    type="checkbox"
                    onClick={(e) => {
                        setIsRememberChecked(!isRememberChecked)
                    }}
                />
                <span>Remember me</span>
            </label>
        </div>
        <button 
            className="sign-in-button" 
            onClick={
                async (e) => {
                    e.preventDefault()
                    // let token = await postLogin('iu','ui')
                    token = await services.postLogin(userName, password)
                    if (token.length) {
                        setIsLogged(true)
                        redirect("/user")
                        console.log('ok');
                    }
                    dispatch({
                        type : "token",
                        payload : {
                            token: token
                        }
                    })
                    console.log(store.getState())
                }
            }> Sign In</button>
        
    </form>
    )
    }
