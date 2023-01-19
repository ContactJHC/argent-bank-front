import LoginForm from "../../components/LoginForm/LoginForm"
import userIcon from "../../assets/circle-user.svg"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"


export default function Login() {

  const dispatch=useDispatch()
  const navigate = useNavigate()
  const storageIsLogged = JSON.parse(localStorage.getItem('loginLogout'))
  if (storageIsLogged !== null) {
      dispatch({
          type: "loginLogout",
          payload : {
              bool: storageIsLogged
          }
      })
  }
  const isLogged = useSelector((s)=>s.isLogged)

  //   ici on vérifie la présence de connexion, si oui : navigate user
    useEffect(() => {
      if (isLogged === true) {
        navigate('/user')
        console.log('redirection vers Home car token manquant');
      }
    },[isLogged, navigate])


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
