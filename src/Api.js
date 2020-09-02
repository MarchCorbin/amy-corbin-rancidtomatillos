
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

export const fetchComments = (movieId) => {
return fetch(`http://localhost:3001/api/v1/movies/${movieId}/comments`)
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

export const postToFavorites = (movieId) => {
return fetch('http://localhost:3001/api/v1/favorites', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json'},
  body: JSON.stringify({
    "id":movieId
  })
})
.then(res => {
  if(res.ok) {
    return res.json()
  } else {
    throw alert(err => err.message)
  }
})
}

export const getUserFavorites = () => {
  return fetch('http://localhost:3001/api/v1/favorites')
  .then(res => {
    if(res.ok) {
      return res.json()
    } else {
      throw alert(err => err.message)
    }
  })
}

export const postUserRating = async (userId, id, rating) => {
  let movRating = parseInt(rating)
  return await fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/users/${userId}/ratings`,
  {
    method: 'POST',
    headers: { 'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    "movie_id": id,
    "rating": Number(rating)
  })
  })
  .then(res => res.json())
  .catch(err => (err))

}


export const deleteSingleRating = async(userId, ratingId) => {
  return await fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/users/${userId}/ratings/${ratingId}` , {
    method: 'DELETE',
    headers: {
      'content-type': 'application/json'
    }
  })
  .catch(err => alert(err.message));
}

export const postComment = async (movieId, author, comment) => {
  return await fetch(`http://localhost:3001/api/v1/movies/${movieId}/comments`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      "author": author,
      "comment": comment
    }),
  })
  .then(res => {
    if (res.ok) {
      return res.json()
    } else {
      throw alert('Invalid comment, Please try again')
    }
  })
}

