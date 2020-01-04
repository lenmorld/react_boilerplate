Rails.application.routes.draw do
  get 'welcome/index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  resources :cards

  # TESTING
  get '/lessons/blah', to: 'lessons#blah'
  get '/lessons/route_test', to: 'lessons#route_test', as: 'route_test'

  # add resource
  # resources :lessons
  resources :lessons do
    resources :comments
  end

  root 'welcome#index'
end
