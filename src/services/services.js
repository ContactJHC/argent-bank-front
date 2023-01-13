// import { usersFetching, usersResolved, usersRejected } from "../features/users"

export async function postLogin(userName, password) {
    try {
        const result = await fetch('http://localhost:3001/api/v1/user/login', 
            {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json'
                },
                // body: JSON.stringify({
                //     'email': 'tony@stark.com',
                //     'password': 'password123'
                // })
                body: JSON.stringify({
                    'email': userName,
                    'password': password
                })
            })
            .then((res) => res.json())
            .then((json) => json.body.token)
            return result
        } catch (err) {
            console.log(err);
            return null
      }
}

export async function postSignup(email, password, firstName, lastName) {
    try {
        const result = await fetch('http://localhost:3001/api/v1/user/signup', 
            {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json'
                },
                // body: JSON.stringify({
                //     "email": "tony@stark.com",
                //     "password": "password123",
                //     "firstName": "tony",
                //     "lastName": "pastark"
                // })
                body: JSON.stringify({
                    "email": email,
                    "password": password,
                    "firstName": firstName,
                    "lastName": lastName
                })
            })
            .then((res) => res.json())
            .then((json) => json.body.token)
        return result
    } catch (err) {
        console.log(err);
        return null
    }
}

export async function postProfile(token) {
    try {
        const result = await fetch('http://localhost:3001/api/v1/user/profile', 
            {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json',
                'Authentication': `Bearer ${token}`
                }
            })
            .then((res) => res.json())
            .then((json) => json.body.token)
        return result
    } catch (err) {
        console.log(err);
        return null
    }
}

export async function putProfile(token, firstName, lastName) {
    try {
        const result = await fetch('http://localhost:3001/api/v1/user/profile', 
            {
                method: 'PUT',
                headers: {
                'Content-Type': 'application/json',
                'Authentication': `Bearer ${token}`
                },
                // body: JSON.stringify({
                //     "firstName": "tony",
                //     "lastName": "pastark"
                // })
                body: JSON.stringify({
                    "firstName": firstName,
                    "lastName": lastName
                })
            })
            .then((res) => res.json())
            .then((json) => json.body.token)
        return result
    } catch (err) {
        console.log(err);
        return null
    }
}

// export default async function fetchOrUpdateUsers(store) {
//     const status = store.getState().users.status
//     // avoiding two requests at the same time
//     if (status === 'pending' || status === 'updating') {
//         return
//     }
//     // the request has been launched
//     store.dispatch(usersFetching())
//     try {
//         const response = await fetch(dataURL, {
//             method: 'POST',
//             headers: {
//                 "Content-Type": "application/json"
//             },
//             body : {
//                 "email": "tony@stark.com",
//                 "password": "password123"
//               }
//         })
//         const data = await response.json()
//         store.dispatch(usersResolved(data))
//         console.log(data);
//     } catch (error) {
//         store.dispatch(usersRejected(error))
//         console.log(error);
//     }
// }

