
import { Link } from 'react-router-dom'
import argentBankLogo from '../../assets/argentBankLogo.png'
import userIcon from '../../assets/circle-user.svg'
import logOut from '../../assets/logOut.svg'
import './Header.css'

export default function Header() {

    let isLogged = false
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
                <Link to={"/"} className="main-nav-item">
                    <img src={userIcon} alt="user icon" className="main-nav-item-icon"/>
                    <span id="userName">
                        {/* {userName} */}
                        Tony
                    </span>
                    <img src={logOut} alt="disconnect"/>
                    <span id="signOut">Sign Out</span>
                </Link>
                ) : (
                <Link to={"/login"} className="main-nav-item">
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
