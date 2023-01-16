import { createStore } from "redux"

function reducer(state, action) {
    if (action.type === "checkedUnchecked") {
        return {
            ...state,
            isRememberChecked: !state.isRememberChecked
        }
    }

    if (action.type === "firstNameChange") {
        return {
        ...state,
        userName: action.payload.changingField 
        }
    }

    if (action.type === "lastNameChange") {
        return {
        ...state,
        userName: action.payload.changingField 
        }
    }

    if (action.type === "userNameChange") {
        return {
        ...state,
        userName: action.payload.changingField 
        }
    }

    if (action.type === "userNameChange") {
        return {
        ...state,
        userName: action.payload.changingField 
        }
    }

    if (action.type === "passwordChange") {
        return {
        ...state,
        password: action.payload.changingField 
        }
    }

    if (action.type === "token") {
        return {
            ...state,
            token: action.payload.token 
        }
    }

    if (action.type === "loginLogout") {
        return {
            ...state,
            isLogged: action.payload.bool
        }
    }


    // si l'action n'est pas du bon type on retourne le state
    return state
}

const initialState = {
    // userName is the wireframe name for the user's email
    firstName: '',
    lastName: '',
    userName: '',
    password: '',
    isRememberChecked: false,
    isLogged: false,
    token : ''
}

const store = createStore(reducer, initialState)

export default store