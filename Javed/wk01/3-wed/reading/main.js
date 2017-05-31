var books = [{
    title: 'Infinite Jest',
    author: 'David Foster Wallace',
    alreadyRead: false
  },
  {
    title: 'Ancillary Justice',
    author: 'Ann Leckie',
    alreadyRead: true
  },
  {
    title: 'The Dispossessed',
    author: 'Ursula K LeGuin',
    alreadyRead: true
  }
]

console.log(books);

for (var count = 0; count < books.length; count++) {
  switch (books[count].alreadyRead) {
    case true:
      console.log('You already read ' + books[count].title + ' by ' + books[count].author)
      break
    case false:
      console.log('You still need to read ' + books[count].title + ' by ' + books[count].author);
      break
  }
}


// for (var count = 0; count < books.length; count++) {
//   console.log(books[(count)].title + ' by ' books[(count)].author);
// }
