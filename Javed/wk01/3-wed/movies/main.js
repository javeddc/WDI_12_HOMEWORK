var film = {
  title: 'Get Out',
  duration: 104,
  stars: ['Daniel Kaluuya', 'Allison Williams', 'Catherine Keener', 'Bradley Whitford']
}

function describeFilm() {
  console.log(film.title + ' lasts for ' +
    film.duration + ' minutes. Stars: ' + film.stars.join(', '));
}

describeFilm();
