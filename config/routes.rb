Rails.application.routes.draw do
  root 'home#index'

  namespace :api do
    get '/skills', to: 'skills#show', as: 'skills'
    get '/experience', to: 'experience#show', as: 'experience'
    get '/education', to: 'education#show', as: 'education'
    get '/contact', to: 'contact#show', as: 'contact'
  end

  get '*unmatched_route', to: 'home#index'
end
