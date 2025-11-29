const links = document.querySelectorAll('nav a');
const scrollContainer = document.querySelector('.scroll-container');

links.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault(); // 기본 앵커 이동 막기

    const targetId = link.getAttribute('href').slice(1);
    const targetElem = document.getElementById(targetId);

    // scroll-container 안에서 정확한 위치 계산
    const scrollTop = targetElem.offsetTop - scrollContainer.offsetTop;

    scrollContainer.scrollTo({
      top: scrollTop,
      behavior: 'smooth'
    });
  });
});
