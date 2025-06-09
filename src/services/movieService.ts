import axios from 'axios';
import { type Movie } from '../types/movie';

const API_URL = 'https://api.themoviedb.org/3/search/movie';
const TOKEN = import.meta.env.VITE_TMDB_TOKEN; 

export interface MoviesApiResponse {
  results: Movie[];
  total_pages: number;
  total_results: number;
  page: number;
}

interface FetchMoviesParams {
  query: string;
  page: number;
}

export default async function fetchMovies({
  query,
  page,
}: FetchMoviesParams): Promise<MoviesApiResponse> {
  const config = {
    params: { query, page },
    headers: {
      Authorization: `Bearer ${TOKEN}`, 
    },
  };

  const response = await axios.get<MoviesApiResponse>(API_URL, config); 
  return response.data;
}