
export const fetchAllMovies = () => {
  return fetch("https:rancid-tomatillos.herokuapp.com/api/v2/movies")
  .then(response => {
    if (response.ok) {
      return response.json()
    } 
  })
}

export const fetchSingleMovieDetails = (movieId) => {
return fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${movieId}`)
.then(res => res.json())
}

export const fetchUserMovieRatings = (id) => {
return fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/users/${id}/ratings`)
.then(res => res.json())
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
  .then(res => {
    if(res.ok) {
      return res.json()
    } else {
      throw alert('Invalid Login, Please try again')
    }
  })
}