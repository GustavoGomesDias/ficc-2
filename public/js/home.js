const responsiveNavBtn = document.querySelector('.menu-icon');


responsiveNavBtn.addEventListener('click', () => {

    document.querySelector('.m-navigation').style.transform = 'translateX(0)';

    const closeNavBtn = document.querySelector('.back-icon');
    const navItem = document.querySelectorAll('.nav-item');

    closeNavBtn.addEventListener('click', () => {

        document.querySelector('.m-navigation').style.transform = 'translateX(-10000px)';

    });


    for (let item of navItem) {
        item.addEventListener('click', () => {
            document.querySelector('.m-navigation').style.transform = 'translateX(-10000px)';
        });
    }
});

window.onscroll = function() {
    const wppBtn = document.querySelector('.wpp-btn');
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    wppBtn.style.display = "block";
  } else {
    wppBtn.style.display = "none";
  }
};