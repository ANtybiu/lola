document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll('.counter');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const counter = entry.target;
      const target = +counter.getAttribute('data-target');
      console.log(target)
      let speed = 150; // Adjust speed as needed
      let time = 20;
      if (target > 200) {
        time = 20
      } else {
        time = 75
      }
      console.log(speed)
      if (entry.isIntersecting) {
        counter.style.transition = `opacity 1s`;
        counter.style.opacity = `1`;
        document.getElementById('plusNums').style.transition = `opacity 1s`;
        document.getElementById('plusNums').style.opacity = `1`;
        // Count up when in view
        const countUp = () => {
          const current = +counter.innerText;
          const increment = Math.ceil(target / speed);

          if (current < target) {
            counter.innerText = current + increment;
            setTimeout(countUp, time); // Adjust for smoothness
          } else {
            counter.innerText = target; // Ensure exact final value
          }
        };

        countUp();
      } else {
        counter.style.transition = ``;
        counter.style.opacity = `0`;
        document.getElementById('plusNums').style.transition = ``;
        document.getElementById('plusNums').style.opacity = `0`;
        // Reset to 0 when out of view
        counter.innerText = '0';
      }
    });
  });

  counters.forEach(counter => observer.observe(counter));
});
document.addEventListener("DOMContentLoaded", () => {
  const serviceBoxes = document.querySelectorAll('.services-box');
  const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.style.transition = `opacity 1s,margin-top 1s ,border 0.1s `;
              entry.target.style.opacity = `1`;
              entry.target.style.marginTop = `0`;
          }else{
            entry.target.style.transition = ``;
              entry.target.style.opacity = `0`;
              entry.target.style.marginTop = `100px`;
          }
      });
  }, {
      threshold: 0
  });

  serviceBoxes.forEach(box => observer.observe(box));
});
