export interface IMovieDetail {
    id: number;
    title: string;
    poster_path: string;
    release_date: string;
    overview: string;
    vote_average: number;
    backdrop_path: string;
    budget: number;
    genres: { id: number; name: string }[];
    homepage: string;
    imdb_id: string;
    original_language: string;
    original_title: string;
    popularity: number;
    revenue: number;
    runtime: number;
    spoken_languages: { english_name: string; iso_639_1: string; name: string }[];
    status: string;
    tagline: string;
    video: boolean;
    vote_count: number;
  }
  