import { API } from '../backend'


export const UpdatePass = (userId,token,password) => {
    return fetch(`${API}/user/update/${userId}`,{
        method:"PUT",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(password)
    })
    .then(response => {
        return response.json()
    })
    .catch(err => console.log(err))
}