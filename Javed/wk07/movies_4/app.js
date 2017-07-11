var input = $('input')[0];
var $results = $('.results');

$('button').bind('click', function(ev) {
  ev.preventDefault();
  // console.log(input.value);
  $results.empty()

  var settings = {
    url: 'http://omdbapi.com/',
    data: {
      s: input.value,
      apikey: '2f6435d9'
    }
  }

  $.ajax(settings).done(function(response) {
    console.log(response.Search[0]);
    _.each(response.Search, function(movie) {
      var $card = $('<div class="ui-card"></div>');
      $card.append($('<a href="http://www.imdb.com/title/' + movie.imdbID + '" target="_blank"><header class="content">' + movie.Title + '</a><span>Year:' + movie.Year + '</span></header>'));
      var $imgdiv = $('<div class="image"></div>')
      $imgdiv.css("background-image", 'url(' + movie.Poster + ')');
      $card.append($imgdiv)
 
      $results.append($card);
    })
  });

})



// <div class="ui-card">
//     <header class="content">
//
//
//     </header>
//     <div class="image">
//       <img src="http://via.placeholder.com/800x800" alt="">
//       <span class="star">&#9734</span>
//     </div>
//     <div class="description content">
//       <header>
//         <h2>pudding</h2>
//         <h2><span>at <a href="#">GA</a></span></h2>
//       </header>
//       <p>Typewriter affogato hexagon stumptown. Vaporware keytar schlitz venmo tumeric celiac mlkshk chia flexitarian umami pork belly air plant. Cloud bread swag marfa, artisan PBRB flannel etsy street art keffiyeh pickled echo park jean shorts migas
//         hammock taxidermy. </p>
//     </div>
//     <footer class="content">
//       abc
//       <span class="count">100 likes</span>
//     </footer>
//   </div>





// <a href="/detail/?id=<%= result['imdbID'] %>">
//   <div style="background-image: url('<%= result['Poster'] %>')" class="poster_img">
//     <% title = result['Title']
//     if title.length > 16
//       title = title[0..16] + '. . .'
//     end %>
//     <h5 class="result_title"><%= title %></h5>
//     <h5 class="result_year"><%= result['Year'] %></h5>
//   </div>
// </a>
