require 'sinatra'
require 'sinatra/reloader'
require 'pry'
require 'httparty'

# File.wr

def store_search

end


get '/' do
  erb :index
end


get '/result/' do
  @query = params[:query]
  @results = HTTParty.get("http://www.omdbapi.com/?s=#{@query}&apikey=2f6435d9").parsed_response["Search"]
  if @results == nil
    return 'error - no search results'
  end
  if @results.length == 1
    @movie = @results[0]
    @movie = HTTParty.get("http://www.omdbapi.com/?i=#{@results[0]['imdbID']}&apikey=2f6435d9").parsed_response
    return erb :detail
  end
  # store_search @query
  erb :result
end

get '/detail/' do
  @id = params[:id]
  @movie = HTTParty.get("http://www.omdbapi.com/?i=#{@id}&apikey=2f6435d9").parsed_response

  erb :detail
end
