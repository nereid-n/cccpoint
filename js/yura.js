$(document).on('click', '.crypto-header__mobile-btn', function () {
  $(this).toggleClass('crypto-header__mobile-btn-cross');
  $(this).siblings('.crypto-header__mobile-menu').slideToggle('fast');
});