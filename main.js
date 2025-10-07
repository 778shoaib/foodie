    var swiper = new Swiper(".mySwiper", {
        loop:true,
      navigation: {
        nextEl: "#next",
        prevEl: "#prev",
      },
    });

    // const cartIcon = document.queryselector('.cart-icon')
    // const cartTab = document.queryselector('.cart-tab')

    // cartIcon.addEventListener('click', ()=> cartTab.classList.add('cart-tab-active'));
  

    let productList = [];

    const initAPP = () => {
      fetch('product.')
    }