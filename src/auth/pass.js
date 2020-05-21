import { API } from '../backend'



export const getPass = (passId) =>{
    fetch(`${API}/pass/${passId}`,{
        method:"GET",
        headers:{
            Accept: "application/json"
        }
    })
    .then(response =>{
        return response.json()
    })
    .catch(err => console.log(err))
}

export const getAllPass = () => {
    return fetch(`${API}/pass`,{
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
