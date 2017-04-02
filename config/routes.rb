Rails.application.routes.draw do
  root 'home#index'

  namespace :api do
    get '/skills', to: 'skills#show'
    get '/experience', to: 'experience#show'
    get '/education', to: 'education#show'
    get '/contact', to: 'contact#show'
  end

  get '*unmatched_route', to: 'home#index'
end
