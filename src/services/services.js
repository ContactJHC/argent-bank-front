// import { usersFetching, usersResolved, usersRejected } from "../features/users"
import { useEffect } from "react";
import { useDispatch } from "react-redux";


export async function postLogin(userName, password) {
    try {
        const result = await fetch('http://localhost:3001/api/v1/user/login', 
            {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    'email': 'tony@stark.com',
                    'password': 'password123'
                })
                // body: JSON.stringify({
                //     'email': userName,
                //     'password': password
                // })
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
            .then((json) => console.log(json))
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
                method: "POST",
                body: '',
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            })
            .then(async (res) => {
                let data = await res.json()
                let prenom = data.body.firstName
                let nom = data.body.lastName
                console.log(data);
                return ({prenom, nom})
                })
            console.log('on a un result', result);
            
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
                body: JSON.stringify({
                    "firstName": firstName,
                    "lastName": lastName
                }),
                headers: {
                    'Content-Type' : 'application/json',
                    Authorization: `Bearer ${token}`
                }
            })
            .then((res) => res.json())
            .then((json) => console.log(json))
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

