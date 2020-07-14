const { API } = require("../../backend");

export const getStudentInfo = (userId,token) =>{
    return fetch(`${API}/student/info/${userId}`,{
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