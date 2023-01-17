import { useNavigate } from "react-router-dom"
import { useState } from "react"
import "./LoginForm.css"
import { useDispatch, useSelector } from "react-redux"
import * as services from "../../services/services"
import store from "../../store"


export default function LoginForm() {
    const dispatch = useDispatch()
    // const [userName, setUserName] = useState('')
    // const [password, setPassword] = useState('')
    const userName = useSelector((state) => state.userName)
    const password = useSelector((state) => state.password)
    const [isRememberChecked, setIsRememberChecked] = useState(false)
    const navigate = useNavigate()

    return (
        
    <form className='login-form'>
        <label className="input-wrapper">
            <span>Username</span>
            <input 
                type="text" 
                id="usernameInput"
                onChange={(e) => {
                    dispatch({
                        type: "userNameChange",
                        payload: {
                            changingField: e.target.value
                        }
                    })
                }}
                value={userName}
                required
                // autoComplete="tony@stark.com"
            />
        </label>
        <label className="input-wrapper">
            <span>Password</span>
            <input 
                id="passwordInput"
                // type="password"
                type="text" 
                onChange={(e) => {
                    dispatch({
                        type: "passwordChange",
                        payload: {
                            changingField: e.target.value
                        }
                    })
                    // setPassword(e.target.value)
                }}
                value={password}
                required
                // autoComplete="password123"
            />
        </label>
        <div className="input-remember">
            <label>
                <input 
                    type="checkbox"
                    onClick={(e) => {
                        setIsRememberChecked(!isRememberChecked)
                        dispatch({
                            type: "checkedUnchecked"
                        })
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
                    let token = await services.postLogin('iu','ui')
                    // token = await services.postLogin(userName, password)
                    if (token.length) {
                        navigate('/user')
                        console.log('le state à la fin du if token.length', store.getState())

                    }
                    dispatch({
                        type : "token",
                        payload : {
                            token: token
                        }
                    })

                    dispatch({
                        type: "loginLogout",
                        payload : {
                            bool: true
                        }
                    })

                    dispatch({
                        type: "userNameChange",
                        payload : {
                            changingField: userName
                        }
                    })

                    dispatch({
                        type: "passwordChange",
                        payload : {
                            changingField: password
                        }
                    })

                    console.log('le store à la fin du clic sur sign in', store.getState())
                }
            }> Sign In</button>
        
    </form>
    )
    }
