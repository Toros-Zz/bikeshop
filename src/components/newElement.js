export const newElement = (el, elClass) => {
  const element = document.createElement(el)
  element.className = elClass;
  
  return element;
};
