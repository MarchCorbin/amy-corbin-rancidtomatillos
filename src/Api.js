
export const fetchAllMovies = () => {
  return fetch("https:rancid-tomatillos.herokuapp.com/api/v2/movies")
  .then(response => {
    if (response.ok) {
      return response.json()
    } else {
      throw new Error("error, please try again")
    }
  })
}


export const postLogin = (email, password) => {
  return fetch('https://rancid-tomatillos.herokuapp.com/api/v2/login', 
  {
    method: 'POST',
    headers: { 'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    "email": email,
    "password": password
  })
  })
  .then(res => res.json())
}