class ArticlesController < ApplicationController

  def index
    @articles = Article.all
  end

  def new
  end

  def show
    @article = Article.find(params[:id])
  end

  def create
    article = Article.new
    article.title = params[:title]
    article.content = params[:content]
    article.category_id = params[:category_id]
    # binding.pry
    if article.save
      redirect_to '/articles'
    else
      render :new
    end
  end

  def stuff
    render json: { abc: 123 }
  end

end
