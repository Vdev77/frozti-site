// Parallax scrolling effect
document.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section');
  const scrollTop = window.pageYOffset;

  sections.forEach(section => {
    const offset = section.offsetTop;
    const distance = scrollTop - offset;

    section.style.transform = `translateY(${distance * 0.1}px)`;
  });
});
