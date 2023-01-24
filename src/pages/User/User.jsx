import Account from "../../components/Account/Account"
import data from "../../data/data"
import { useEffect, useState } from "react"
import './User.css'
import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { putProfile } from "../../services/services"
import UsePostProfile from "../../services/UsePostProfile"


export default function User() {

  const [isLoading, setIsLoading] = useState(true)

  const dispatch = useDispatch()

  let userFirstName = useSelector(s=>s.firstName)
  let userLastName = useSelector(s=>s.lastName)

  const storageToken = JSON.parse(localStorage.getItem('token'))
  if (storageToken !== null)
  {  dispatch({
      type: "token",
      payload : {
          token: storageToken
      }
    })
  }

  // states locaux pour élaborer la logique de la page avant de passer en global
  const [isEditingName, setIsEditingName] = useState(false)
  const [newFirstName, setNewFirstName] = useState('')
  const [newLastName, setNewLastName] = useState('')

  // afficher/cacher avec conditions l'encart de changement de nom
  const inverseEditingName = () => setIsEditingName(!isEditingName)
  const navigate = useNavigate()

  const token = useSelector((s)=>s.token)
  UsePostProfile(token)

  //   ici on vérifie la présence de connexion, sinon navigate home
  useEffect(() => {
    if (token === '' || token === null) {
      navigate('/')
      
      console.log('redirection vers Home car token manquant');
    }
    setIsLoading(false)
  },[token, navigate])
  
  


  return (
    (isLoading ? (<></>) : (
    <main className="main bg-dark">
      {!isEditingName ? (
        <div className="header">
        <h1>Welcome back<br />{userFirstName} {userLastName} !</h1>
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
                    changingField: newFirstName
                  }
                })
                dispatch({
                  type: "lastNameChange",
                  payload: {
                    changingField: newLastName
                  }
                })
                localStorage.setItem('firstName', JSON.stringify(newFirstName))
                localStorage.setItem('lastName', JSON.stringify(newLastName))
                putProfile(token, newFirstName, newLastName)
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

    ))
  )
}
