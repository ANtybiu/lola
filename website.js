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
        time = 70
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
              entry.target.style.marginTop = `50rem`;
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
          entry.target.style.marginTop = `50rem`;
          entry.target.style.boxShadow = `box-shadow: 0px 0px 5px rgba(0,0,0,0.5);`
      }
      });
  }, {
      threshold: 0
  });

  serviceBoxes.forEach(box => observer.observe(box));
});

function deez(password) {
  if(password === 'nuts')
  window.open('https://www.weikiendental.com', '_self');
  console.error('KAKI TANGAN!!')
  if(password === 'zap'){
    window.open('https://www.tesla.com', '_self');
  }
}
let triggered;
let hamburger = false;

function toggleHamburger() {
  const options = document.getElementById('hamburger-options');
  if (hamburger) {
    hamburger = false;
    triggered = true;

    // Smoothly hide the menu
    options.style.opacity = '0';
    options.style.paddingRight = '0';
    options.style.transition = 'padding-right 0.2s ease, opacity 0.2s ease';

    setTimeout(() => {
      triggered = false;
      options.style.display = 'none'; // Hide after animation
    }, 210);
  } else {
    hamburger = true;

    // Show the menu
    options.style.display = 'flex'; // Make it visible immediately
    setTimeout(() => {
      // Apply transition properties *after* setting display
      options.style.transition = 'padding-right 0.2s ease, opacity 0.2s ease';
      options.style.opacity = '1';
      options.style.paddingRight = '15rem';
    }, 10); // Delay to ensure transition is applied
  }
}
let deviceType = 'pc';
function openEM(type){
  if(deviceType === 'pc'){
  window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=scw_co@yahoo.com`);
  }else{
    window.location.href = "mailto:scw_co@yahoo.com";
  }
}
function isMobile() {
  return /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
}

if (isMobile()) {
  deviceType = 'mobile'
}
