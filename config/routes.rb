Rails.application.routes.draw do

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create]
    resources :restaurants, only: [:create, :index, :show]
    resources :reservations, only: [:create]
    resources :favorites, only: [:create, :destroy]
    resource :session, only: [:create, :destroy]
    post "/restaurants/search", to: "restaurants#search"
  end

  root to: 'root#root'
end
