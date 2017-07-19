class Api::CommentsController < ApplicationController

  def show
    comments = Comment.where(article_id: params[:id])
    render json: Article.find(params[:id]).list_comments
  end

end
