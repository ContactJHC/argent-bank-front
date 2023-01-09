import { Link } from "react-router-dom"
import LoginForm from "../../components/LoginForm/LoginForm"


export default function Login() {
  // fetchOrUpdateUsers(store)


  fetch('http://localhost:3001/api/v1/user/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        'email': 'tony@stark.com',
        'password': 'password123'
    })
}).then(resp => resp.json())
  .then(json => console.log(json))

  
  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <LoginForm />
        {/* <form>
          <div className="input-wrapper">
            <label for="username">Username</label>
            <input type="text" id="username" />
          </div>
          <div className="input-wrapper">
            <label for="password">Password</label>
            <input type="password" id="password" />
          </div>
          <div className="input-remember">
            <input type="checkbox" id="remember-me" />
            <label for="remember-me">Remember me
            </label>
          </div>
          <Link to={"/user"} className="sign-in-button">
            Sign In
          </Link>
        </form> */}
      </section>
    </main>
  )
}
