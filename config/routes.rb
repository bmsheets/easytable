Rails.application.routes.draw do

  namespace :api do
    get 'favorites/create'
  end

  namespace :api do
    get 'favorites/delete'
  end

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create]
    resources :restaurants, only: [:create, :index, :show]
    resources :reservations, only: [:create]
    resource :session, only: [:create, :destroy]
    post "/restaurants/search", to: "restaurants#search"
  end

  root to: 'root#root'
end
