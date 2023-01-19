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
                    // let token = await services.postLogin('iu','ui')
                    let token = await services.postLogin(userName, password)
                    if (token.length) {
                        navigate('/user')
                    }
                    dispatch({
                        type : "token",
                        payload : {
                            token: token
                        }
                    })
                    localStorage.setItem('token', JSON.stringify(token))


                    dispatch({
                        type: "loginLogout",
                        payload : {
                            bool: true
                        }
                    })
                    localStorage.setItem('loginLogout', JSON.stringify(true))


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

                }
            }> Sign In</button>
        
    </form>
    )
    }
