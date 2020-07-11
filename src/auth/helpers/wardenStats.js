import { API } from '../../backend'

export const getStudent = (userId,token) =>{
    return fetch(`${API}/student/${userId}`,{
        method:"GET",
        headers:{
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
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

export const Managepass = (userId,token) => {
    return fetch(`${API}/pass/warden/${userId}`,{
        method: "GET",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        }
    })
    .then(response => {
        return response.json()
    })
    .catch(err => console.log(err))
}


export const createUser = (values) => {
    return fetch(`${API}/signup`,{
        method:"POST",
        headers:{
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(values)
    })
    .then(response => {
        return response.json()
    })
    .catch(err => console.log(err))
}