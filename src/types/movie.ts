export interface Movie {
    id: number;
    title: string;
    overview: string;
    poster_path: string;
    backdrop_path: string;
    release_date: string;
    vote_average: number;
  }
  
  export interface MoviesApiResponse {
    results: Movie[];
    total_pages: number;
    total_results: number;
    page: number;
  }