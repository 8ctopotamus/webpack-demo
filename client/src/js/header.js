export const headerClick = () => {
  const header = document.getElementById('header');
  if (header.style.color === 'green') {
    header.style.color = 'black';
  } else {
    header.style.color = 'green';
  }
};
