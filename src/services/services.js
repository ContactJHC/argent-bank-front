import { usersFetching, usersResolved, usersRejected } from "../features/users"

// users data URL : 
const dataURL = 'http://localhost:3001/user/login'

export default async function fetchOrUpdateUsers(store) {
    const status = store.getState().users.status
    // avoiding two requests at the same time
    if (status === 'pending' || status === 'updating') {
        return
    }
    // the request has been launched
    store.dispatch(usersFetching())
    try {
        const response = await fetch(dataURL, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body : {
                "email": "tony@stark.com",
                "password": "password123"
              }
        })
        const data = await response.json()
        store.dispatch(usersResolved(data))
        console.log(data);
    } catch (error) {
        store.dispatch(usersRejected(error))
        console.log(error);
    }
}

