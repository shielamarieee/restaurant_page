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

  const button = document.createElement('button');
  button.className = 'order-btn';
  button.textContent = 'Order Online';
  tagline.appendChild(button);
}