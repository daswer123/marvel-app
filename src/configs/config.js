const API_KEY = "0a5ee57833ef657e515632f90f53d6b6";
const API_KEY_PRIVATE = "ac115fe6e7178bc9d1ffbb9349da1814aef6da82";
const API_URL = "https://gateway.marvel.com:443/v1/public/";
const API_CHARACTERS = `${API_URL}characters`;
const API_COMICS = `${API_URL}comics`;
const API_CHARACTER = `${API_URL}characters/`;

const COMICS_CHAR_LIMIT = 15;

const CHARACTER_PAGE = 0;
const COMICS_PAGE = 0;

const CHARACTER_PER_PAGE = 9;
const COMICS_PER_PAGE = 9;
const TIMEOT = 10; // IN Seconds TIME BEFORE ERROR

export {
  API_KEY,
  API_KEY_PRIVATE,
  API_URL,
  API_CHARACTERS,
  API_COMICS,
  COMICS_CHAR_LIMIT,
  API_CHARACTER,
  CHARACTER_PAGE,
  CHARACTER_PER_PAGE,
  COMICS_PAGE,
  COMICS_PER_PAGE,
  TIMEOT,
};
