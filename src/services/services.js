// import { usersFetching, usersResolved, usersRejected } from "../features/users"

// users data URL : 
const loginURL = 'http://localhost:3001/api/v1/user/login'

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

    // let token = fetch('http://localhost:3001/api/v1/user/login', 
    //     {
    //         method: 'POST',
    //         headers: {
    //         'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify({
    //             'email': 'tony@stark.com',
    //             'password': 'password123'
    //         })
    //         // body: JSON.stringify({
    //         //     'email': userName,
    //         //     'password': password
    //         // })
    //     }
    // )
    // .then(resp => resp.json())
    // .then(json => token = json.body.token)
    // console.log(token);
    // return token
}
