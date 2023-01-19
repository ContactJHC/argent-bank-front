import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function UsePostProfile(token) {
    const dispatch = useDispatch()
    let leprenom = useSelector(s=>s.firstName)
    let lenom = useSelector(s=>s.lastName)
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

                    // localStorage.removeItem('firstName')
                    // localStorage.setItem('firstName', JSON.stringify(prenom))
                    dispatch({
                        type: "firstNameChange",
                        payload : {
                            changingField: prenom
                        }
                    })

                    // localStorage.removeItem('firstName')
                    // localStorage.setItem('lastName', JSON.stringify(nom))
                    dispatch({
                        type: "lastNameChange",
                        payload : {
                            changingField: nom
                        }
                    })



                    console.log('le prénom :', leprenom, 'le nom : ', lenom);

                })
                
            } catch (err) {
                console.log(err);
                return null
            }
        }
        postProfileData(token)
        



    }, [dispatch, token])

}
