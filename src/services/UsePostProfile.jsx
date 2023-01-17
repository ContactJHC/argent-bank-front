import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function UsePostProfile(token) {
    const dispatch = useDispatch()
    useEffect( () => {
        async function postProfileData(token) {
            try {
                await fetch('http://localhost:3001/api/v1/user/profile', 
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

                    dispatch({
                        type: "firstNameChange",
                        payload : {
                            changingField: prenom
                        }
                    })

                    dispatch({
                        type: "lastNameChange",
                        payload : {
                            changingField: nom
                        }
                    })

                })
                
            } catch (err) {
                console.log(err);
                return null
            }
        }
        postProfileData(token)
        



    }, [dispatch, token])

    let state = useSelector(s=>s)
    console.log('le dernier state : ',state);
}
