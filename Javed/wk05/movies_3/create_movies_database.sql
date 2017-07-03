DROP TABLE IF EXISTS movies_cache;
DROP TABLE IF EXISTS query_cache;

CREATE TABLE movies_cache (
  imdbID varchar(10) PRIMARY KEY,
  Title varchar(60) NOT NULL,
  Poster varchar(1000),
  Year varchar(10),
  Director varchar(100),
  Actors varchar(300),
  Plot varchar(1000),
  Language varchar(30),
  Country varchar(30),
  Writer varchar(100)
);

CREATE TABLE query_cache (
  query varchar(30) PRIMARY KEY,
  result_ids varchar(1000)
);

INSERT INTO movies_cache(imdbID, Title, Year, Plot) VALUES ('ttblah', 'jaws', 1975, 'its about a big shark');
