 const cards = document.querySelectorAll('.card');

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        observer.unobserve(entry.target); // anima apenas uma vez
      }
    });
  }, {
    threshold: 0.1
  });

  cards.forEach((card, index) => {
    observer.observe(card);
    // atraso para aparecer em sequência
    card.style.transitionDelay = `${index * 0.25}s`;
  });