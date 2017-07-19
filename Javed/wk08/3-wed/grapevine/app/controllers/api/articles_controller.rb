class Api::ArticlesController < ApplicationController

  def show
    article = Article.find(params[:id])
    render json: article.process_article
  end

end
