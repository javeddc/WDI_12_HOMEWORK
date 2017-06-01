var film = {
  title: 'Get Out',
  duration: 104,
  stars: ['Daniel Kaluuya', 'Allison Williams', 'Catherine Keener', 'Bradley Whitford']
}

function describeFilm() {
  return film.title + ' lasts for ' +
    film.duration + ' minutes. Stars: ' + film.stars.join(', ');
}

console.log(describeFilm());

var replaceMe = /!/gi;

function calmYourself(string) {
  return string.toLowerCase().replace(replaceMe,'');
}
