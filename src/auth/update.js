import { API } from '../backend'


//update password
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


//update user
export const UpdateInfo = (userId,token,values) => {
    return fetch(`${API}/user/${userId}`,{
        method:"PUT",
        headers:{
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(values)
    })
    .then(response => {
        return response.json()
    })
    .catch(err => console.log(err))
}

//get User
export const getUser = (userId) => {
    return fetch(`${API}/user/${userId}`,{
        method: "GET",
        headers:{
            Accept: "application/json"
        }
    })
    .then(response => {
        return response.json()
    })
    .catch(err => console.log(err))
} 
