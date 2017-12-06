/* eslint-disable no-undef */
$(document).ready(() => {
  localStorage.setItem('item', 1);
  const $addItem = $('.add-item');
  $addItem.click(() => {
    let $item = localStorage.getItem('item');
    $('#cloning-child .flex-header-type').clone().appendTo('.flex-details');
    $('#cloning-child .item-type').clone().appendTo('.flex-details');
    $item = parseInt($item) + 1;
    localStorage.setItem('item', $item);
    $('.flex-details .flex-header-type').find('span:first-child').html(`Flex ${$item}`);
    $('.specifications .item-type .size').attr('name', `flex-size-${$item}`);
    $('.specifications .item-type .quantity').attr('name', `quantity-${$item}`);
    $('.specifications .item-type').removeClass('item-type').addClass(`item-${$item}`);
    $('.flex-details .flex-header-type').removeClass('flex-header-type').addClass(`flex-header-${$item}`);
    const $previousItem = $item - 1;
    $(`.flex-details .flex-header-${$previousItem}`).find('a:last-child i').removeClass('fa-times').addClass('fa-pencil');
    $('.flex-details').accordion();
    $('.flex-details').accordion('refresh');
    const index = $('.room-list-item h3').length - 1;
    $('.flex-details').accordion({ active: index });

    $('.close-itemlist').click(function () {
      const $self = $(this);
      let $item = localStorage.getItem('item');
      if ($self.parent().hasClass(`flex-details-header flex-header-${$item}`)) {
        $self.parent().next().remove();
        $self.parent().remove();
        $item -= 1;
        localStorage.setItem('item', $item);
        $('.add-room-button').removeClass('gray-background');
        $(`.flex-details .flex-header-${$item}`).find('a:last-child i').removeClass('fa-pencil').addClass('fa-times');
      }
    });
  });
});
