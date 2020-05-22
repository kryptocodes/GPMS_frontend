import { API } from '../backend'



export const getPass = (passId) =>{
    fetch(`${API}/pass/${passId}`,{
        method:"GET",
        headers:{
            Accept: "application/json",
        }
    })
    .then(response =>{
        return response.json()
    })
    .catch(err => console.log(err))
}

export const getUserPass = (userId,token) => {
    return fetch(`${API}/pass/userpass/${userId}`,{
        method: "GET",
        headers:{
            Accept: "application/json",
            Authorization: `Bearer ${token}`
        }
    })
    .then(response => {
        return response.json()
    })
    .catch(err => console.log(err))
}

export const deletePass = (userId,token,passId) => {
    return fetch(`${API}/pass/delete/${passId}/${userId}`,{
        method:"DELETE",
        headers:{
            Accept:"application/json",
            Authorization: `Bearer ${token}`
        }
    })
    .then(response => {
        return response.json()
    })
    .catch(err => console.log(err))
}







