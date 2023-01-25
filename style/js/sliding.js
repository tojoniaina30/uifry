  // // core version + navigation, pagination modules:
  import Swiper, { Autoplay, Navigation, Pagination } from 'swiper';
  // import Swiper and modules styles
  import 'swiper/css';
  import 'swiper/css/navigation';
  import 'swiper/css/pagination';

/*   init Swiper: */

export class Slider {
    init ( ) {
        const swiper = new Swiper('.swiper', {
            /*    configure Swiper to use modules */
               modules: [Navigation, Pagination, Autoplay],
               pagination: {
                 el: '.swiper-pagination',
               },
             
           /*     Navigation arrows */
               navigation: {
                 nextEl: '.swiper-button-next',
                 prevEl: '.swiper-button-prev',
               },
               loop : true,
               autoplay: {
                 delay: 2500,
               },
             });
    }
}