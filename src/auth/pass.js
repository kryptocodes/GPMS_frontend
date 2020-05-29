import { API } from '../backend'



export const getPass = (passId) =>{
    return fetch(`${API}/pass/${passId}`,{
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

export const getFacultyPass = (userId,token) => {
    return fetch(`${API}/pass/student/${userId}`, {
        method: "GET",
        headers:{
            Accept: "application/json",
            Authorization: `Bearer ${token}`
        }
    })
    .then(response =>{
        return response.json()
    })
    .catch(err => console.log(err))
}

export const updatePass = (userId,token,passId,values) => {
    return fetch(`${API}/pass/updatepass/${passId}/${userId}`, {
        method: 'PUT',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(values)
      }
    )
      .then(response => {
        return response.json();
      })
      .catch(err => console.log(err));
  };


export const updateStatus = (userId,token,passId,status) => {
    return fetch(`${API}/pass/${passId}/status/${userId}`, {
        method: 'PUT',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(status)
      }
    )
      .then(response => {
        return response.json();
      })
      .catch(err => console.log(err));
  };

  export const updatePost = (userId,token,passId,values) => {
    return fetch(`${API}/pass/${passId}/post/${userId}`, {
        method: 'PUT',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(values)
      }
    )
      .then(response => {
        return response.json();
      })
      .catch(err => console.log(err));
  };



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

export const createPass = (userId,token,values) => {
    return fetch(`${API}/pass/homepass/${userId}`,{
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








