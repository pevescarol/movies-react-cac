// llamada a la API de TMDB
const API = 'https://api.themoviedb.org/3'

export const get = async (path) => {
  return await fetch (API+path, {
    headers: {
      Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNDUwN2M3MGI5ODUyYmViMTBmNjdjMzNhYTk5YTM0ZSIsInN1YiI6IjY0MjVmNjk4MDFiMWNhMDA3Nzc5YjNiNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.aadfO1HT6JAt2bnRbOxvatL2e3PSTQMpsxHGQn1FvsQ',
      'Content-Type': 'application/json;charset=utf-8'
    }
  }).then((results) => results.json())
}  