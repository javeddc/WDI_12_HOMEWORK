// var btn = document.querySelector('button');
var source = $("#gif-result-template").html();
var template = Handlebars.compile(source);
var $input = $('#searchInput')
var test

var searchOffset = 0;

var moreGifs = function() {
  console.log('mmm');
  var settings = {
    // https://api.giphy.com/v1/gifs/random?api_key=5f8b49b5576a4b10ad2279ada6504d13&tag=&rating=G
    url: 'https://api.giphy.com/v1/gifs/search',
    data: {
      api_key: '5f8b49b5576a4b10ad2279ada6504d13',
      rating: 'PG',
      limit: '10',
      q: $input.val().toString(),
      offset: searchOffset.toString()
      // offset: '3'
    }
  }
  $.ajax(settings).done(function(result) {
    test = result.data;
    result.data.forEach(function(oneResult) {
      // console.log(oneResult.images.fixed_width.url);
      var $para = $('<p>')
      $para.html(searchOffset + oneResult.images.fixed_width.url  0);
      $('.response').append($para)
      $('.response').append(template(oneResult.images.fixed_width));
    })


  })
  searchOffset++;
}



$('button').on('click', moreGifs);

window.onload = moreGifs

// $(window).scroll(function() {
//   if ($(window).scrollTop() + $(window).height() == $(document).height()) {
//     moreGifs();
//   }
// });


$('.right').on('scroll', function() {
  if ($(this).scrollTop() + $(this).innerHeight() >= $(this)[0].scrollHeight) {
    moreGifs();
  }
})
