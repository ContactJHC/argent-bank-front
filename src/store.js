// import { configureStore } from "@reduxjs/toolkit";
// import usersReducer from "./features/users";
import { createStore } from "redux"


// // store creation

// export default configureStore({
//     reducer: {
//         users: usersReducer
//     }
// })

    // fonction reducer 

    function reducer(state, action) {
        if (action.type === "checkedUnchecked") {
            return {
                ...state,
                isRememberChecked: !state.isRememberChecked
            }
        }
        if (action.type === "onChangeListener") {
          return {
            ...state,
            userName: action.payload.changingField 
          }
        }
        // si l'action n'est pas du bon type on retourne le state
        return state
    }

 


const initialState = {
    userName: '',
    password: '',
    isRememberChecked: false,
    token : ''
}

const store = createStore(reducer, initialState)
// action pour changer isRememberChecked

const checkedActionBis = {
    type: "checkedUnchecked"
}

// action pour mettre à jour le nom / idem password

const userNameAction = {type: "changeUserName"}
const passwordAction = {type: "changePassword"}

// action unique pour nom et password

const onChangeActionBis = {
    type: "onChangeListener",
    payload: { changingField: "userName"}
}

// fonction qui créé les actions : Action Creators

const checkedAction = () => ({ type: "checkedUnchecked" })
const onChangeAction = (changingField) => ({
    type: "onChangeListener",
    payload: { changingField: changingField }
})


let state = store.getState()

store.dispatch({ type: "checkedUnchecked" })


store.dispatch(checkedActionBis)
store.dispatch(onChangeActionBis)


store.dispatch(checkedAction())


store.dispatch(onChangeAction("bobby"))


// const dispatch = useDispatch() 

// dispatch(onChangeAction("laura"))




// donc quand redux pur : store.dispatch(OBJ action), store.subscribe(fonction)
// sinon dispatch(OBJ action) après dispatch = useDispatch(), useSelector(cllbck de state -> attribut de state, store.subscribe si cet élément change)





    export default store









// // action pour changer isRememberChecked

// const checkedActionBis = {
//     type: "checkedUnchecked"
// }

// // action pour mettre à jour le nom / idem password

// const userNameAction = {type: "changeUserName"}
// const passwordAction = {type: "changePassword"}

// // action unique pour nom et password

// const onChangeActionBis = {
//     type: "onChangeListener",
//     payload: { changingField: "userName"}
// }

// // fonction qui créé les actions : Action Creators

// const checkedAction = () => ({ type: "checkedUnchecked" })
// const onChangeAction = (changingField) => ({
//     type: "onChangeListener",
//     payload: { changingField: changingField }
// })

// // fonction reducer 

// function reducer(state, action) {
//     if (action.type === "checkedUnchecked") {
//         return {
//             ...state,
//             isRememberChecked: !state.isRememberChecked
//         }
//     }
//     // si l'action n'est pas du bon type on retourne le state
//     return state
// }

// const store = createStore(reducer, initialState)