import LoginForm from "../../components/LoginForm/LoginForm"
import userIcon from "../../assets/circle-user.svg"


export default function Login() {

  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <img src={userIcon} alt="Utilisateur" />
        <h1>Sign In</h1>
        <LoginForm />
      </section>
    </main>
  )
}
