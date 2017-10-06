import $ from 'jquery';

// window.$ = window.jQuery = $;

$.get('http://localhost:3000/api/sample', (res) => {
  console.log('Response from sample api: ', res);
});
