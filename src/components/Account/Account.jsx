import { Link } from "react-router-dom"

export default function Account({ title, amount, description, accountId }) {
  return (
    <section className="account" key={accountId}>
        <div className="account-content-wrapper">
            <h3 className="account-title">{title}</h3>
            <p className="account-amount">{amount}</p>
            <p className="account-amount-description">{description}</p>
        </div>
        <div className="account-content-wrapper cta">
            <Link to={`/profile/view/:${accountId}`} className="transaction-link">
            <button className="transaction-button">View transactions</button>
            </Link>
        </div>
    </section>
    // <section className="account">
    //     <div className="account-content-wrapper">
    //         <h3 className="account-title">Argent Bank Checking (x8349)</h3>
    //         <p className="account-amount">$2,082.79</p>
    //         <p className="account-amount-description">Available Balance</p>
    //     </div>
    //     <div className="account-content-wrapper cta">
    //         <button className="transaction-button">View transactions</button>
    //     </div>
    // </section>
  )
}
