import Account from "../../components/Account/Account"
import data from "../../data/data"
import { useState } from "react"
import './User.css'

export default function User() {

  let userFirstName = 'Tony'
  let userLastName = 'Jarris'

  const [isEditingName, setIsEditingName] = useState(false)
  const [newFirstName, setNewFirstName] = useState('')
  const [newLastName, setNewLastName] = useState('')

  const inverseEditingName = () => setIsEditingName(!isEditingName)
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
              onClick={inverseEditingName}
              >
              Save
            </button>
            <button 
              className="CancelButton"
              onClick={inverseEditingName}
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
