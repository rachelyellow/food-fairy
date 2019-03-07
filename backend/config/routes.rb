Rails.application.routes.draw do

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.htm

  # Create a root that shows the google maps 

  root to: 'restaurants#index'
  get '/customers/login' => 'sessions#new'
  post '/customers/login' => 'sessions#create'
  get '/customers/logout' => 'sessions#destroy'

  resources :questions, only: [:show]
  resources :results, only: [:show, :create]
  resources :answers, only: [:create]
  
  resources :restaurants do
    resources :quizzes, only:[:show, :create, :update]
  end

end

