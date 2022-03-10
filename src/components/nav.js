import { newElement } from './newElement';
import { upDate } from '../index'

export const nav = newElement('nav', 'nav header__nav');
let activePage = 'home';

export const getPage = () => {
  return activePage;
};

const navList = newElement('ul', 'nav__list');
nav.appendChild(navList);

const li_logo = newElement('li', 'nav__item');

const logo = newElement('img', 'nav__item nav__logo');
logo.src = 'https://lampaled.ru/800/600/https/www.pinclipart.com/picdir/big/146-1465366_film-strip-logos-icons-projects-to-try-templates.png';
logo.alt = 'Logo Movie Shop';
li_logo.appendChild(logo);

navList.appendChild(li_logo);

const li_home = createLiButton('Home', 'home');
navList.appendChild(li_home);

const li_shop = createLiButton('Shop', 'shop');
navList.appendChild(li_shop);

const li_button = createLiButton('Sing in', 'singIn');
navList.appendChild(li_button);

function onClick(event) {
  activePage = event.currentTarget.name;
  upDate();
};

function createLiButton(text, value) {
  const li = newElement('li', 'nav__item');
  const button = newElement('button', 'nav__button button');
  button.textContent = text;
  button.name = value;
  button.addEventListener("click", onClick);

  li.appendChild(button);

  return li;
}