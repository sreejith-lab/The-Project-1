// Mobile menu toggle
const menuBtn = document.getElementById('menu');
const mobileNav = document.getElementById('mobileNav');
menuBtn.addEventListener('click', () => mobileNav.classList.toggle('active'));

// Mobile dropdown toggle
const mobileDropdown = document.querySelector('.mobile-dropdown');
const dropdownToggle = document.querySelector('.dropdown-toggle');
dropdownToggle.addEventListener('click', (e)=>{
    e.preventDefault();
    mobileDropdown.classList.toggle('active');
});
