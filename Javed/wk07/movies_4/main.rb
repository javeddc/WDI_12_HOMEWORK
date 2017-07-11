require 'sinatra'
require 'sinatra/reloader'
require 'pry'
require 'httparty'
require 'pg'

# File.wr
#
# def store_search
#
# end

def run_sql(sql)
  conn = PG.connect(dbname: 'movies')
  result = conn.exec(sql)
  conn.close
  result
end

run_sql(File.read('create_movies_database.sql'))

def add_movie(movie)
  run_sql("INSERT INTO movies_cache(imdbid, title, poster, year, director, actors, plot, language, country, writer) VALUES ('#{movie['imdbID']}', '#{movie['Title'].gsub('\'','\'\'')}', '#{movie['Poster'].gsub('\'','\'\'')}', '#{movie['Year']}', '#{movie['Director']}', '#{movie['Actors']}', '#{movie['Plot']}', '#{movie['Language']}', '#{movie['Country']}', '#{movie['Writer']}');")
end

def get_movie(id)
  if   run_sql("SELECT * FROM movies_cache WHERE imdbID = '#{id}'").count == 0
    return nil
  else
    run_sql("SELECT * FROM movies_cache WHERE imdbID = '#{id}'")[0]
  end
end

get '/' do
  erb :index
end


get '/result/' do
  @query = params[:query]
  # insert check for already existing query
  cache_result = run_sql("SELECT * FROM query_cache WHERE query = '#{@query}'")

  # if not in cache, search the API
  if cache_result.count == 0

      @results = HTTParty.get("http://www.omdbapi.com/?s=#{@query}&apikey=2f6435d9").parsed_response["Search"]
      if @results == nil
        result_id_list = ''
        return 'error - no search results'
      elsif @results.length == 1
        @movie = HTTParty.get("http://www.omdbapi.com/?i=#{@results[0]['imdbID']}&apikey=2f6435d9").parsed_response
        result_id_list = @movie['imdbID']
        add_movie @movie
        return erb :detail
      elsif @results.length > 1
        result_id_list = ''
        # add each result to the movies cache
        @results.each do |result|
          result_id_list += result['imdbID'] + ','

          if (get_movie("#{result['imdbID']}") == nil)
            add_movie(result)
          end

          # binding.pry
        end

      end
      # store search query
      run_sql("INSERT INTO query_cache(query, result_ids) VALUES ('#{@query}', '#{result_id_list}');")
      erb :result

  # else must be in the cache
  else

      # collect the data from the cache
      @cached_ids = cache_result[0]['result_ids'].split(',')
      @results = []
      @cached_ids.each do |id|
        @results.push get_movie(id)
      end
      # binding.pry
      erb :locresult
  end


end

get '/detail/' do
  @id = params[:id]
  @movie = HTTParty.get("http://www.omdbapi.com/?i=#{@id}&apikey=2f6435d9").parsed_response

  erb :detail
end
