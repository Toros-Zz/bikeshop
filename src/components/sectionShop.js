import { newElement } from './newElement';
import { movieList } from './movieList';
import { newCard } from './movieCard';

import savedMovies from '../api/movie.json';

export const sectionShop = newElement('section', 'shop body__shop');
sectionShop.id = 'sectionShop';
sectionShop.appendChild(movieList);

for (let i = 0; i < savedMovies.length; i++) {
  const card = newCard(savedMovies[i].Title, savedMovies[i].Plot, savedMovies[i].Poster);
  sectionShop.appendChild(card);
}



