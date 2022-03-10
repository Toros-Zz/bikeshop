import { nav } from "./nav";
import { newElement } from "./newElement";

export const header = newElement('header', 'header');
header.appendChild(nav);
