const baseUrl = 'https://api.themoviedb.org/3/';
const key = '090bc19f76777bf61b9044178c9a6eb7';

export default function Api(movieId, query) {
  if (movieId) {
    return fetch(`${baseUrl}movie/${movieId}?api_key=${key}`).then(response => {
      if (response.ok) {
        return response.json();
      }
    });
  }

  if (query) {
    return fetch(`${baseUrl}search/movie?api_key=${key}&${query}`).then(
      response => {
        if (response.ok) {
          return response.json();
        }
      }
    );
  }
  return fetch(`${baseUrl}trending/all/day?api_key=${key}`).then(response => {
    if (response.ok) {
      return response.json();
    }
  });
}
