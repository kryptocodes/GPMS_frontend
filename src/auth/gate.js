import { API } from '../backend' 

export const entryCheck = (userId,token,passId,values) => {
    return fetch(`${API}/pass/${passId}/entry/${userId}`, {
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

export const exitCheck = (userId,token,passId,values) => {
    return fetch(`${API}/pass/${passId}/exit/${userId}`, {
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