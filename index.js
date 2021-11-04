window.addEventListener('DOMContentLoaded', function() {
  document.querySelector('.header__burger').addEventListener('click', function () {
    document.querySelector('.header__right').classList.toggle('header__right_active')
  })
})

window.addEventListener('DOMContentLoaded', function() {
  document.querySelector('.header__burger').addEventListener('click', function () {
    document.querySelector('.header__nav').classList.toggle('header__nav_active')
  })
})

window.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.how-we-work__step').forEach(function(tabsBtn){
    tabsBtn.addEventListener('click', function(event) {
      const path = event.currentTarget.dataset.path

      document.querySelectorAll('.how-we-work__tab').forEach(function(tabContent) {
        tabContent.classList.remove('how-we-work__tab_active')
      })
      document.querySelector('[data-target="'+path+'"]').classList.add('how-we-work__tab_active')
    })
  })
})

// Свайпер
const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

//   Аккордеон
  $( function() {
    $( "#accordion" ).accordion({
      active: false,
      collapsible: true
    });
  } );
