window.addEventListener('load', function () {
  console.log('barba-wrapper:', document.getElementById('barba-wrapper'));
  barba.init({
    transitions: [{
      name: 'fade-transition',
      leave(data) {
        return gsap.to(data.current.container, { opacity: 0, duration: 0.3 });
      },
      enter(data) {
        gsap.set(data.next.container, { opacity: 0 });
        return gsap.to(data.next.container, { opacity: 1, duration: 0.3 });
      }
    }]
  });
});