import { newElement } from './newElement';
import { getMovie } from '../api/api.js'
import { newCard } from './movieCard';

export const sectionHome = newElement('section', 'home body__home');

const section = newElement('div', 'home__cover');
sectionHome.appendChild(section);

const title = newElement('h1', 'home__title');
title.textContent = 'Movie shop';
section.appendChild(title);

const form = newElement('form', 'home__form');
section.appendChild(form);

const input = newElement('input', 'home__input');
input.placeholder = 'Type movie';
input.id = 'inputMovie';
input.addEventListener('input', handler);
form.appendChild(input);

const button = newElement('button', 'home__button');
button.textContent = 'Search';
button.addEventListener("click", onSubmit);
form.appendChild(button);


let inputValue = ''; 

const isValid = () => {
  if (inputValue.trim()) {
    return true;
  }

  return false;
};

const resetInput = () => {
  inputValue = '';
  input.value = '';
};

const addMovieToList = (movie) => {
  const isMovieValid = movie.Plot && movie.Poster && movie.Title;

  if(isMovieValid) { 
    const card = newCard(movie.Title, movie.Plot, movie.Poster);
    const list = document.getElementById('movieList');
    list.appendChild(card);
  }
};

const loadMovie = async () => {
  const movie = await getMovie(inputValue);

  addMovieToList(movie);
};

function onSubmit(event) {
  event.preventDefault()
  if (isValid()) {
    loadMovie();
  }
  resetInput();
};

function handler(event) {
  inputValue = event.currentTarget.value;
};
