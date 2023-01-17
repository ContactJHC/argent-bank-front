import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function UsePutProfile(token, firstName, lastName) {
    const dispatch = useDispatch()
    useEffect( () => {
        async function putProfileData(token, firstName, lastName) {
            try {
                await fetch('http://localhost:3001/api/v1/user/profile', 
                {
                    method: "PUT",
                    body: {
                        "firstName": firstName,
                        "lastName": lastName
                    },
                    headers: {
                        Authorization: `Bearer ${token}`,
                    }
                })
                .then(async (res) => {
                    let data = await res.json()
                    console.log(data);

                    dispatch({
                        type: "firstNameChange",
                        payload: {
                          changingField: firstName
                        }
                      })

                    dispatch({
                        type: "lastNameChange",
                        payload: {
                          changingField: lastName
                        }
                      })

                })
                
            } catch (err) {
                console.log(err);
                return null
            }
        }
        putProfileData(token, firstName, lastName)
        



    }, [dispatch, token, firstName, lastName])

    let state = useSelector(s=>s)
    console.log('le dernier state : ',state);
}
