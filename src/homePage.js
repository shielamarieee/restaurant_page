import { removeChilds, setActiveButton } from "./index.js";
import menuPage from "./menuPage";
export default function homePage() {
  //-----Main-----
  const main = document.querySelector('main');

  const tagline = document.createElement('div');
  tagline.className = 'tagline';
  main.appendChild(tagline);

  const h1 = document.createElement('h1');
  h1.textContent = 'Taste the world\'s best noodles';
  tagline.appendChild(h1);

  const p = document.createElement('p');
  p.textContent = 'Handmade noodles with rich flavoured broth';
  tagline.appendChild(p);

  const menuTab = document.querySelector('.menu');

  const button = document.createElement('button');
  button.addEventListener('click', (e) => {
    removeChilds(main);
  menuPage();
  if (e.target.classList.contains("active")) return;
    setActiveButton(menuTab);
  })
  button.className = 'order-btn';
  button.textContent = 'Order Online';
  tagline.appendChild(button);
}