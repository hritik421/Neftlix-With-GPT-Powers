export const API_OPTIONS  = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer ' + process.env.REACT_APP_TMBD_KEY,
    }
  };

export const IMG_CDN = "https://image.tmdb.org/t/p/w500";

export const OPENAI_KEY = process.env.REACT_APP_OPEN_AI;

export const SUPPORTED_LANGUAGES = [
  { identifier: "en", name: "English"},
  { identifier: "hindi", name: "Hindi"},
  { identifier: "spanish", name: "Spanish"}
]