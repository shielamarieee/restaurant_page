import noodlesImg from './images/noodles.png';
export default function menuPage() {
  //-----Main-----
  const main = document.querySelector('.main');
  
  const menuCard = document.createElement('div');
  menuCard.className = 'menu';
  menuCard.classList.add('card');
  main.appendChild(menuCard);

  //-----Left Side-----
  const dishes1 = document.createElement('div');
  dishes1.className = 'dishes';
  menuCard.appendChild(dishes1);

  // Dish 1 
  const dish1 = document.createElement('div');
  dish1.className = 'dish';
  dishes1.appendChild(dish1);

  const dishName1 = document.createElement('p');
  dishName1.className = 'dish-name';
  dishName1.textContent = 'Lorem Ipsum - $15';
  dish1.appendChild(dishName1);

  const dishDetails1 = document.createElement('p');
  dishDetails1.className = 'dish-details';
  dishDetails1.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In placerat sapien ac augue hendrerit, ut scelerisque felis tempor. Maecenas rutrum enim nec ligula efficitur laoreet nec ut augue.';
  dish1.appendChild(dishDetails1);

  // Dish 2
  const dish2 = document.createElement('div');
  dish2.className = 'dish';
  dishes1.appendChild(dish2);

  const dishName2 = document.createElement('p');
  dishName2.className = 'dish-name';
  dishName2.textContent = 'Lorem Ipsum - $15';
  dish2.appendChild(dishName2);

  const dishDetails2 = document.createElement('p');
  dishDetails2.className = 'dish-details';
  dishDetails2.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In placerat sapien ac augue hendrerit, ut scelerisque felis tempor. Maecenas rutrum enim nec ligula efficitur laoreet nec ut augue.';
  dish2.appendChild(dishDetails2);

  // Dish 3 
  const dish3 = document.createElement('div');
  dish3.className = 'dish';
  dishes1.appendChild(dish3);

  const dishName3 = document.createElement('p');
  dishName3.className = 'dish-name';
  dishName3.textContent = 'Lorem Ipsum - $15';
  dish3.appendChild(dishName3);

  const dishDetails3 = document.createElement('p');
  dishDetails3.className = 'dish-details';
  dishDetails3.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In placerat sapien ac augue hendrerit, ut scelerisque felis tempor. Maecenas rutrum enim nec ligula efficitur laoreet nec ut augue.';
  dish3.appendChild(dishDetails3);

  //-----Center-----
  const menuCenter = document.createElement('div');
  menuCenter.className = 'menu-center';
  menuCard.appendChild(menuCenter);

  const menuHead = document.createElement('p');
  menuHead.className = 'menu-head';
  menuHead.textContent = 'Menu';
  menuCenter.appendChild(menuHead);

  const img = document.createElement('img');
  img.src = noodlesImg;
  img.setAttribute('alt', 'noodles.png');
  menuCenter.appendChild(img);

  //-----Right Side-----
  const dishes2 = document.createElement('div');
  dishes2.className = 'dishes';
  menuCard.appendChild(dishes2);

  // Dish 4 
  const dish4 = document.createElement('div');
  dish4.className = 'dish';
  dishes2.appendChild(dish4);

  const dishName4 = document.createElement('p');
  dishName4.className = 'dish-name';
  dishName4.textContent = 'Lorem Ipsum - $15';
  dish4.appendChild(dishName4);

  const dishDetails4 = document.createElement('p');
  dishDetails4.className = 'dish-details';
  dishDetails4.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In placerat sapien ac augue hendrerit, ut scelerisque felis tempor. Maecenas rutrum enim nec ligula efficitur laoreet nec ut augue.';
  dish4.appendChild(dishDetails4);

  // Dish 5
  const dish5 = document.createElement('div');
  dish5.className = 'dish';
  dishes2.appendChild(dish5);

  const dishName5 = document.createElement('p');
  dishName5.className = 'dish-name';
  dishName5.textContent = 'Lorem Ipsum - $15';
  dish5.appendChild(dishName5);

  const dishDetails5 = document.createElement('p');
  dishDetails5.className = 'dish-details';
  dishDetails5.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In placerat sapien ac augue hendrerit, ut scelerisque felis tempor. Maecenas rutrum enim nec ligula efficitur laoreet nec ut augue.';
  dish5.appendChild(dishDetails5);

  // Dish 6 
  const dish6 = document.createElement('div');
  dish6.className = 'dish';
  dishes2.appendChild(dish6);

  const dishName6 = document.createElement('p');
  dishName6.className = 'dish-name';
  dishName6.textContent = 'Lorem Ipsum - $15';
  dish6.appendChild(dishName6);

  const dishDetails6 = document.createElement('p');
  dishDetails6.className = 'dish-details';
  dishDetails6.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In placerat sapien ac augue hendrerit, ut scelerisque felis tempor. Maecenas rutrum enim nec ligula efficitur laoreet nec ut augue.';
  dish6.appendChild(dishDetails6);
}