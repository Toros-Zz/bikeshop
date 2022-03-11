import './style/index.scss';
import { header } from './components/header';
import { sectionHome } from './components/sectionHome';
import { sectionShop } from './components/sectionShop';
import { movieList } from './components/movieList';
import { getPage } from './components/nav';

const body = document.getElementById('body');
body.className = 'body';

body.appendChild(header);

upDate();

export function upDate() {
  switch (getPage()) {
    case 'shop':
      body.removeChild(sectionHome);
      body.removeChild(movieList);
      body.appendChild(sectionShop);
      break;
    case 'home':
    default:
      if (document.getElementById('sectionShop')){
        body.removeChild(sectionShop);
      }
      body.appendChild(sectionHome);
      body.appendChild(movieList);
  }
};