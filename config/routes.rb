Rails.application.routes.draw do
  get 'todos/index'
  get 'todos/update'
  get '/todos/create' => 'todos#create'
  resources :todos
  resources :projects

  # The priority is based upon order of creation: first created -> highest priority.
  # See how all your routes lay out with "rake routes".

  # You can have the root of your site routed with "root"

  root 'todos#index'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
