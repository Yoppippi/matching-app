Rails.application.routes.draw do
  devise_for :users
  get 'matchings/index'
  root to: "matchings#index"
end
