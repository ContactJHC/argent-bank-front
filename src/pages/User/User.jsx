import Account from "../../components/Account/Account"
import data from "../../data/data"
import { useEffect, useState } from "react"
import './User.css'
import store from "../../store"
import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { postProfile, putProfile } from "../../services/services"
import UsePostProfile from "../../services/UsePostProfile"


export default function User() {

  // données en dur pour simuler connexion utilisateur
  let userFirstName = useSelector(s=>s.firstName)
  let userLastName = useSelector(s=>s.lastName)

  // states locaux pour élaborer la logique de la page avant de passer en global
  const [isEditingName, setIsEditingName] = useState(false)
  const [newFirstName, setNewFirstName] = useState('')
  const [newLastName, setNewLastName] = useState('')

  // afficher/cacher avec conditions l'encart de changement de nom
  const inverseEditingName = () => setIsEditingName(!isEditingName)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const token = useSelector((s)=>s.token)
  UsePostProfile(token)

  //   ici on vérifie la présence de connexion, sinon navigate home
  useEffect(() => {
    if (token === '') {
      navigate('/')
      console.log('redirection vers Home car token manquant');
    }
  },[token, navigate])
  
  


  return (
    <main className="main bg-dark">
      {!isEditingName ? (
        <div className="header">
        <h1>Welcome back<br />Tony Jarvis!</h1>
        <button 
          className="edit-button"
          onClick={inverseEditingName}>
            Edit Name
        </button>
      </div>
      ) : (
        <div className="header">
          <h1>Welcome back</h1>
          <div className="editName">
            <label className="editName-inputs">
              <input 
                type="text" 
                placeholder={userFirstName}
                className="editName-inputs-first" 
                value={newFirstName}
                onChange={(e) => setNewFirstName(e.target.value)}
              />
            </label>
            <label className="editName-inputs">
              <input 
                type="text" 
                placeholder={userLastName}
                className="editName-inputs-last" 
                value={newLastName}
                onChange={(e) => setNewLastName(e.target.value)}
              />
            </label>

          </div>
          <div className="editNameButtons">
            <button 
              className="saveButton"
              onClick={
                () => {              
                dispatch({
                  type: "firstNameChange",
                  payload: {
                    changingField: 'prénom en dur local'
                  }
                })
                dispatch({
                  type: "lastNameChange",
                  payload: {
                    changingField: newLastName
                  }
                })
                // console.log(store.getState());
                // console.log(newFirstName, userFirstName, newLastName, userLastName);
                putProfile(token, 'prénom en dur', 'nom en dur')
                // console.log(userFirstName, userLastName);
                inverseEditingName()
              }}
              >
              Save
            </button>
            <button 
              className="CancelButton"
              onClick={()=>{
                inverseEditingName()
                setNewFirstName('')
                setNewLastName('')
              }}
              >
              Cancel
            </button>
          </div>
        </div>
      )}
      
      <h2 className="sr-only">Accounts</h2>
      {data.map((account) => {
        return (
          <Account
            title={account.title}
            amount={account.amount}
            description={account.description}
            accountId={account.accountId}
            key={account.accountId} 
          />
        )
      })}
    </main>

  )
}
