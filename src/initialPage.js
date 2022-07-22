export default function initialPage() {
  const content = document.getElementById('content');
  
  const container = document.createElement('div');
  container.className = 'container';
  content.appendChild(container);

  //------Navbar-----
  const navbar = document.createElement('nav');
  navbar.className = 'navbar';
  container.appendChild(navbar);

  const logo = document.createElement('h1');
  logo.className = 'logo';
  logo.textContent = 'Ramen';
  navbar.appendChild(logo);

  //Nav Links
  const navlinks = document.createElement('ul');
  navlinks.className = 'nav-links';
  navbar.appendChild(navlinks);

  //Home
  const li1 = document.createElement('li');
  navlinks.appendChild(li1);

  const a1 = document.createElement('a');
  a1.className = 'home btn';
  a1.textContent = 'Home';
  a1.setAttribute('href', '#');
  li1.appendChild(a1);

  //Menu
  const li2 = document.createElement('li');
  navlinks.appendChild(li2);

  const a2 = document.createElement('a');
  a2.className = 'menu btn';
  a2.textContent = 'Menu';
  a2.setAttribute('href', '#');
  li2.appendChild(a2);

  //Contact
  const li3 = document.createElement('li');
  navlinks.appendChild(li3);

  const a3 = document.createElement('a');
  a3.className = 'contact btn';
  a3.textContent = 'Contact';
  a3.setAttribute('href', '#');
  li3.appendChild(a3);

  //-----Main-----
  const main = document.createElement('main');
  main.className = 'main';
  container.appendChild(main);

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

  //-----Footer-----
  const footer = document.createElement('footer');
  footer.className = 'footer';
  container.appendChild(footer);

  const myInfo = document.createElement('div');
  myInfo.className = 'my-info';
  footer.appendChild(myInfo);

  const copyright = document.createElement('p');
  copyright.textContent = `Copyright © ${new Date().getFullYear()} shielamarieee`;
  myInfo.appendChild(copyright);

  const githubLink = document.createElement('a');
  githubLink.setAttribute('href', 'https://github.com/shielamarieee');
  githubLink.setAttribute('target', '_blank');
  myInfo.appendChild(githubLink);

  const githubIcon = document.createElement('i');
  githubIcon.className = 'fa-brands';
  githubIcon.classList.add('fa-github');
  githubLink.appendChild(githubIcon);

  const photoInfo = document.createElement('div');
  photoInfo.className = 'photo-info';
  footer.appendChild(photoInfo);

  const text1 = document.createElement('p');
  text1.textContent = 'Photo by';
  photoInfo.appendChild(text1);

  const link1 = document.createElement('a');
  link1.textContent = ' Dovile Ramoskaite';
  link1.setAttribute('href', 'https://unsplash.com/@dovilerm?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText');
  link1.setAttribute('target', '_blank');
  text1.appendChild(link1);

  const text2 = document.createElement('p');
  text2.textContent = 'on ';
  photoInfo.appendChild(text2);

  const link2 = document.createElement('a');
  link2.textContent = 'Unsplash';
  link2.setAttribute('href', 'https://unsplash.com/s/photos/ramen?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText');
  link2.setAttribute('target', '_blank');
  text2.appendChild(link2);

}