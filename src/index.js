import './style/index.scss';
import { header } from './components/header';
import { sectionHome } from './components/sectionHome';
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
      break;
      case 'home':
      default:
      body.appendChild(sectionHome);
      body.appendChild(movieList);
  }
};