import * as flsFunction from "./modules/functions.js";
import $ from "jquery";
flsFunction.isWebp();

 import Swiper, { Navigation, Pagination } from 'swiper';

new Swiper('.swiper', {
    modules: [Navigation],
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    slidesPerView: 3,
    spaceBetween: 30,

  });

  $(function() {
    $('.header__burger-menu').on('click', function (e) {
      e.preventDefault()
      $('.header__burger-menu-link, .burger-menu' ).toggleClass('active');
      $('body').toggleClass('lock');

      })
  })

