/* eslint-disable no-undef */
$(document).ready(() => {
  const $navbar = $('nav');
  const $hamburger = $('#hamburger-icon');
  if (screen.width <= 980) {
    $navbar.addClass('navbar-collapse');
    $navbar.hide();
  }
  function collapseNavbar() {
    if ($navbar.attr('class') === 'container navbar-collapse') {
      $navbar.removeClass('navbar-collapse');
      $navbar.show(500);
    } else {
      $navbar.addClass('navbar-collapse');
      $navbar.hide(500);
    }
  }
  $hamburger.click(collapseNavbar);
});
