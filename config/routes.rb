Rails.application.routes.draw do
  get 'matchings/index'
  root to: "matchings#index"
end
