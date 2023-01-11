import Account from "../../components/Account/Account"
import data from "../../data/data"

export default function User() {
  return (
    <main className="main bg-dark">
      <div className="header">
        <h1>Welcome back<br />Tony Jarvis!</h1>
        <button className="edit-button">Edit Name</button>
      </div>
      <h2 className="sr-only">Accounts</h2>
      {data.map((account) => {
        return (
            <Account
                title={account.title}
                amount={account.amount}
                description={account.description}
                accountId={account.accountId}
                key={account.accountId} />
        )
      })}
    </main>
  )
}
