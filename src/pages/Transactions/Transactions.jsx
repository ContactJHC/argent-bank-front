














import "./Transactions.css"
import arrowUp from "../../assets/arrowUp.svg"
import arrowDown from "../../assets/arrowDown.svg"

export default function Transactions() {
  return (
  <main class="main">
    <header>
        <div>
            <div id="header-title">Argent Bank Checking (x8349)</div>
            <div id="header-balance">$2,082.79</div>
            <div id="header-legend">Available Balance</div>
        </div>
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
        <div className="container-row">
            <div className="container-line">
            <div className="container-arrow">
                <div className="visible arrow-down"><img src={arrowDown} alt="flèche descendante"/></div>
                <div className="hidden arrow-up"><img src={arrowUp} alt="flèche descendante"/></div>
            </div>
            <div className="container-date">June 20th, 2020</div>
            <div className="container-description">Golden Sun Bakery</div>
            <div className="container-amount">$5.00</div>
            <div className="container-balance">$2082.79</div>
            </div>
            <div className="container-details hidden">
            <div className="container-line container-details-type">Transaction Type : Electronic</div>
            <div className="container-line container-details-category">
                <div className="category-text">Category :</div>
                <div className="hidden">
                <img src="./img/pencil.svg" alt="crayon"/>
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
                <div className="hidden">
                <img src="./img/pencil.svg" alt="crayon"/>
                </div>
                <div className="visible">
                <input type="text" id="notes"  className="notes-input"/>
                </div>                
            </div>
            </div>
        </div>
        <div className="container-row">
            <div className="container-line">
            <div className="container-arrow">
                <div className="visible arrow-down"><img src="./img/arrowDown.svg" alt="flèche descendante"/></div>
                <div className="hidden arrow-up"><img src="./img/arrowUp.svg" alt="flèche descendante"/></div>
            </div>
            <div className="container-date">June 20th, 2020</div>
            <div className="container-description">Golden Sun Bakery</div>
            <div className="container-amount">$5.00</div>
            <div className="container-balance">$2082.79</div>
            </div>
            <div className="container-details">
            <div className="container-line container-details-type">Transaction Type : Electronic</div>
            <div className="container-line container-details-category">
                <div className="category-text">Category :</div>
                <div className="hidden">
                <img src="./img/pencil.svg" alt="crayon"/>
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
                <div className="hidden">
                <img src="./img/pencil.svg" alt="crayon"/>
                </div>
                <div className="visible">
                <input type="text" id="notes"  className="notes-input"/>
                </div>                
            </div>
            </div>
        </div>
        <div className="container-row">
            <div className="container-line">
            <div className="container-arrow">
                <div className="visible arrow-down"><img src="./img/arrowDown.svg" alt="flèche descendante" /></div>
                <div className="hidden arrow-up"><img src="./img/arrowUp.svg" alt="flèche descendante" /></div>
            </div>
            <div className="container-date">June 20th, 2020</div>
            <div className="container-description">Golden Sun Bakery</div>
            <div className="container-amount">$5.00</div>
            <div className="container-balance">$2082.79</div>
            </div>
            <div className="container-details hidden">
            <div className="container-line container-details-type">Transaction Type : Electronic</div>
            <div className="container-line container-details-category">
                <div className="category-text">Category :</div>
                <div className="hidden">
                <img src="./img/pencil.svg" alt="crayon"/>
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
                <div className="hidden">
                <img src="./img/pencil.svg" alt="crayon"/>
                </div>
                <div className="visible">
                <input type="text" id="notes"  className="notes-input" />
                </div>                
            </div>
            </div>
        </div>
                
    </div>
    </section>
  </ main>

  )
}