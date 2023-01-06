














import "./Transactions.css"
import arrowUp from "../../assets/arrowUp.svg"
import arrowDown from "../../assets/arrowDown.svg"
import pencilIcon from "../../assets/pencil.svg"
import TransactionHeader from "../../components/TransactionHeader/TransactionHeader"
import { transactionsDataHeader, transactionsData } from "../../data/transactionsData"
import { useParams, useNavigate } from "react-router-dom"

export default function Transactions() {
    const identifiant = useParams()
    const navigate = useNavigate()

    let data = transactionsDataHeader
    const headerData = data.filter((obj) => {
        return (
        obj.accountId === identifiant.accountId
        )
    })[0]
    console.log(headerData);
    if (headerData === undefined || headerData.length === 0) {
        navigate('*')
    }     

    return (
    <main class="main">
    <header>
        <TransactionHeader 
            title={headerData.title}
            balance={headerData.balance}
            legend={headerData.legend}
        />
    </header>
    <section>
    <div className="container">
        <div className="container-line" id="container-header">
            <div className="container-arrow"></div>
            <div className="container-date">DATE</div>
            <div className="container-description">DESCRIPTION</div>
            <div className="container-amount">AMOUNT</div>
            <div className="container-balance">BALANCE</div>
        </div>
        {transactionsData.map((transaction)=>{
            return(
            <div className="container-row">
                <div className="container-line">
                    <div className="container-arrow">
                        <div className="visible arrow-down"><img src={arrowDown} alt="flèche descendante"/></div>
                        <div className="hidden arrow-up"><img src={arrowUp} alt="flèche descendante"/></div>
                    </div>
                    <div className="container-date">{transaction.date}</div>
                    <div className="container-description">{transaction.description}</div>
                    <div className="container-amount">{transaction.amount}</div>
                    <div className="container-balance">{transaction.balance}</div>
                </div>
                <div className="container-details visible">
                    <div className="container-line container-details-type">Transaction Type : Electronic</div>
                    <div className="container-line container-details-category">
                        <div className="category-text">Category :</div>
                        <div className="hidden">
                            <img src={pencilIcon} alt="crayon"/>
                        </div>
                        <div className="visible">
                            <select className="category-selector">
                                <option value="">--Please choose an option--</option>
                                <option value="electronic">Electronic</option>
                                <option value="food">Food</option>
                                <option value="money">Money</option>
                                <option value="fuel">Fuel</option>
                                <option value="groceries">Groceries</option>
                                <option value="clothes">Clothes</option>
                            </select>
                        </div>
                    </div>
                    <div className="container-line container-details-notes">                    
                        <label for="notes">
                            <div className="notes-text">Notes : </div>
                        </label>
                        <div className="visible">
                            <img src={pencilIcon} alt="pencil"/>
                        </div>
                        <div className="visible">
                            <input type="text" id="notes"  className="notes-input"/>
                        </div>                
                    </div>
                </div>
            </div>  
            )
        })}                 
    </div>
    </section>
    </ main>

    )
}