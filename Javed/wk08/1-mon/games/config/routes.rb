Rails.application.routes.draw do

  get '/', to: 'pages#index'

  get '/eight_ball', to: 'pages#eight_ball'
  get '/eight_ball/result', to: 'pages#eight_ball_result'

  get '/secret_number', to: 'pages#secret_number'
  get '/secret_number/:guess', to: 'pages#guess'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
