import { newElement } from './newElement';

export const newCard = (title, description, img) => {
  let newDescription = description;

  const box = newElement('div', 'card box');
  const cardImg = newElement('img', 'card__img');
  const cardTitle = newElement('h3', 'card__title title');
  const cardDescription = newElement('p', 'card__description');

  cardTitle.textContent = title;
  
  if (description.length > 250) {
    newDescription = `${description.slice(0, 250)}...`
  }

  cardDescription.textContent = newDescription;
  cardImg.src = img;
  cardImg.alt = title;

  box.appendChild(cardTitle);
  box.appendChild(cardImg);
  box.appendChild(cardDescription);

  return box;
};
