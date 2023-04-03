const baseUrl = 'https://api.themoviedb.org/3/';
const key = '090bc19f76777bf61b9044178c9a6eb7';

export default class Api {
  async searchMovieById(movieId) {
    const response = await fetch(`${baseUrl}movie/${movieId}?api_key=${key}`);
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  }

  async searchMovieByQuery(query) {
    const response = await fetch(
      `${baseUrl}search/movie?api_key=${key}&${query}`
    );
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  }
  async searchTrends() {
    const response = await fetch(`${baseUrl}trending/all/day?api_key=${key}`);
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  }
}
