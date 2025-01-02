document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll('.counter');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const counter = entry.target;
      const target = +counter.getAttribute('data-target');
      console.log(target)
      let speed = 150;
      let time = 20;
      if (target > 200) {
        time = 15
      } else {
        time = 55
      }
      console.log(speed)
      if (entry.isIntersecting) {
        counter.style.transition = `opacity 1s`;
        counter.style.opacity = `1`;
        document.getElementById('plusNums').style.transition = `opacity 1s`;
        document.getElementById('plusNums').style.opacity = `1`;
        const countUp = () => {
          const current = +counter.innerText;
          const increment = Math.ceil(target / speed);

          if (current < target) {
            counter.innerText = current + increment;
            setTimeout(countUp, time);
          } else {
            counter.innerText = target;
          }
        };

        countUp();
      } else {
        counter.style.transition = ``;
        counter.style.opacity = `0`;
        document.getElementById('plusNums').style.transition = ``;
        document.getElementById('plusNums').style.opacity = `0`;
        counter.innerText = '0';
      }
    });
  },{threshold: 0.1});

  counters.forEach(counter => observer.observe(counter));
});
let rendering2 = false;
document.addEventListener("DOMContentLoaded", () => {
  const serviceBoxes = document.querySelectorAll('.services-box');
  const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.style.transition = `opacity 1s,margin-top 1s ,border 0.1s `;
              entry.target.style.opacity = `1`;
              entry.target.style.marginTop = `0`;
          }else if(!rendering2){
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

document.addEventListener("DOMContentLoaded", () => {
  const serviceBoxes = document.getElementById('stories');
  const observer = new IntersectionObserver(entries => {
    console.log('hei')
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              rendering2 = true;
          }else{
            rendering2 = false;
          }
      });
  }, {
      threshold: 0.2
  });

  observer.observe(serviceBoxes)
});
document.addEventListener("DOMContentLoaded", () => {
  const serviceBoxes = document.querySelectorAll('.stories-box');
  const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.transition = `opacity 1s,margin-top 1s ,border 0.1s,box-shadow 0.5s `;
          entry.target.style.opacity = `1`;
          entry.target.style.marginTop = `0`;
          entry.target.style.boxShadow = `box-shadow: 0px 0px 10px rgba(0,0,0,0.5);`
      }else{
        entry.target.style.transition = ``;
          entry.target.style.opacity = `0`;
          entry.target.style.marginTop = `100px`;
          entry.target.style.boxShadow = `box-shadow: 0px 0px 5px rgba(0,0,0,0.5);`
      }
      });
  }, {
      threshold: 0
  });

  serviceBoxes.forEach(box => observer.observe(box));
});
