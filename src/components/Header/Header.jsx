
import { Link } from 'react-router-dom'
import argentBankLogo from '../../designs/img/argentBankLogo.png'
import userIcon from '../../assets/circle-user.svg'

export default function Header() {
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
            <Link to={"/login"} className="main-nav-item">
                <img src={userIcon} alt="user icon" className="main-nav-item-icon"/>
                Sign In
            </Link>
        </div>
    </nav>
  )
}
