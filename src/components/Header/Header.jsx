
import { Link } from 'react-router-dom'
import argentBankLogo from '../../assets/argentBankLogo.png'
import userIcon from '../../assets/circle-user.svg'
import logOut from '../../assets/logOut.svg'
import './Header.css'
import { useDispatch, useSelector } from 'react-redux'
import store from '../../store'

export default function Header() {

    const isLogged = useSelector((s)=>s.isLogged)
    const userName = useSelector((s)=>s.firstName)
    const dispatch = useDispatch()

    function resetState() {    
        dispatch({
            type: "resetCheckedUnchecked",
            payload : {
                bool: false
            }
        })

        dispatch({
            type: "firstNameChange",
            payload : {
                changingField: ""
            }
        })

        dispatch({
            type: "lastNameChange",
            payload : {
                changingField: ""
            }
        })

        dispatch({
            type: "userNameChange",
            payload : {
                changingField: ""
            }
        })

        dispatch({
            type: "passwordChange",
            payload : {
                changingField: ""
            }
        })

        dispatch({
            type: "token",
            payload : {
                token: ""
            }
        })

        dispatch({
            type: "loginLogout",
            payload : {
                bool: false
            }
        })}

  return (
    <nav className="main-nav">
        <Link to={"/"} className="main-nav-logo">
            <img
                className="main-nav-logo-image"
                src={argentBankLogo}
                alt="Argent Bank Logo"
            />
            <h1 className="sr-only">Argent Bank</h1>
        </Link>
        <div>
            {(isLogged ?
                (
                <div className="main-nav-item-bis">
                    <Link to={"/user"} className="main-nav-item">
                        <img src={userIcon} alt="user icon" className="main-nav-item-icon"/>
                        <span id="userName">
                            {userName}
                        </span>
                    </Link>
                    <Link 
                        to={"/"} 
                        className="main-nav-item"
                        onClick={()=>{
                            resetState()
                    }}>
                        <img src={logOut} alt="disconnect"/>
                        <span id="signOut">Sign Out</span>
                    </Link>
                </div>
                ) : (
                <Link 
                    to={"/login"} 
                    className="main-nav-item" 
                    >
                    <img src={userIcon} alt="user icon" className="main-nav-item-icon"/>
                    <span id="signIn">
                        Sign In
                    </span>
                </Link>
                )
            )}            
        </div>
    </nav>
  )
}
