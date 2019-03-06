Rails.application.routes.draw do
  get 'answers/create'

  get 'results/create'

  get 'results/show'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.htm

  # Create a root that shows the google maps 

  root to: 'restaurants#index'
  get '/customers/login' => 'sessions#new'
  post '/customers/login' => 'sessions#create'
  get '/customers/logout' => 'sessions#destroy'

  resources :questions, only: [:show]


  resources :results do 
    resources :dishes, only: [:show]
  end
  resources :restaurants do
    resources :quizzes, only:[:show, :create, :update]
  end



  namespace :api do
    resources :restaurants
  end
end

