Rails.application.routes.draw do

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create]
    resources :restaurants, only: [:create, :index, :show] do
      get "/reviews", to: "restaurants#reviews"
    end
    resources :reservations, only: [:create]
    resources :reviews, only: [:create, :update, :destroy]
    resources :favorites, only: [:create, :destroy]
    resource :session, only: [:create, :destroy]
    post "/restaurants/search", to: "restaurants#search"
  end

  root to: 'root#root'
end
