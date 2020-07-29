Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  resources :games, only: [:index, :create]
  resources :splits, only: [:show, :create]
  get 'games/:name', to: 'games#show'
end
