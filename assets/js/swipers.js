var swiper = new Swiper('.docs-swiper', {
    slidesPerView: '1',        
    spaceBetween: 12,             
    loop: false,            
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: function (index, className) {
            let slideTitle = document.querySelectorAll('.swiper-slide')[index].getAttribute('data-title');
            return `<button class="${className}"><span class="swiper-button-circle"></span>${slideTitle}</button>`;
        },
    },       
});

var swiper = new Swiper('.services-slider', {
    slidesPerView: 'auto',
    spaceBetween: 20,
    loop: false,
    navigation: {
        nextEl: '.services-slider-arrow-right',
        prevEl: '.services-slider-arrow-left',
    },
});
