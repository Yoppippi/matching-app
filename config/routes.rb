Rails.application.routes.draw do
  devise_for :users
  root to: "matchings#index"
  resources :users, only: [:edit, :update]
end
