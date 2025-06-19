// Highlight active nav link on scroll
// const sections = document.querySelectorAll("section");
// const navLinks = document.querySelectorAll("nav ul li a");

// window.addEventListener("scroll", () => {
//   let current = "";
//   sections.forEach(section => {
//     const sectionTop = section.offsetTop - 100;
//     if (pageYOffset >= sectionTop) {
//       current = section.getAttribute("id");
//     }
//   });

//   navLinks.forEach(link => {
//     link.classList.remove("active");
//     if (link.getAttribute("href") === "#" + current) {
//       link.classList.add("active");
//     }
//   });
// });

const toggleBtn = document.getElementById('menu-toggle');
  const navLinks = document.getElementById('nav-links');

  toggleBtn.addEventListener('click', () => {
    navLinks.classList.toggle('show');
  });

//Our Services

document.querySelectorAll('.toggle-btn').forEach(button => {
  button.addEventListener('click', () => {
    const box = button.closest('.box');
    const moreText = box.querySelector('.more');

    const isOpening = moreText.classList.contains('hidden');

    // Reset all boxes
    document.querySelectorAll('.box').forEach(b => {
      b.classList.remove('active');
      b.querySelector('.more').classList.add('hidden');
      b.querySelector('.toggle-btn').textContent = 'Read More';
    });

    // If it was hidden, now show and activate
    if (isOpening) {
      moreText.classList.remove('hidden');
      button.textContent = 'Read Less';
      box.classList.add('active');
    }
  });
});


//Latest Project
 document.querySelectorAll('.not-published').forEach(box => {
    box.addEventListener('click', () => {
      alert("App not published yet.");
    });
  });


