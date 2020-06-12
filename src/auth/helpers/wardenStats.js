import { API } from '../../backend'

export const getStudent = () =>{
    return fetch(`${API}/student`,{
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

export const addAtten = (userId,token,values) => {
    return fetch(`${API}/attendance/${userId}`,{
        method:"POST",
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


export const getAttendance = () =>{
    return fetch(`${API}/attendance`,{
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