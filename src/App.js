import { Provider } from "react-redux";
import Bidon from "./components/Bidon";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <div style={{backgroundColor:"lightslategray"}}>Page d'accueil, données dans la console</div>
      <Bidon />
    </Provider>
  )
}

export default App;
