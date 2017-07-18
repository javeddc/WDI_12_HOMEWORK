class PagesController < ApplicationController

def index
  render :index
end

def eight_ball
end

def eight_ball_result
  @answer = ['It is certain','It is decidedly so','Without a doubt','Yes definitely','You may rely on it','As I see it, yes','Most likely','Outlook good','Yes','Signs point to yes','Reply hazy try again','Ask again later','Better not tell you now','Cannot predict now','Concentrate and ask again','Don\'t count on it','My reply is no','My sources say no','Outlook not so good','Very doubtful'].sample
  render :result
end

def secret_number
end

def guess
  @guess = params[:guess]
  raise 'nah'
  render :guess
end

end
