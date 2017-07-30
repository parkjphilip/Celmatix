Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api, defaults: {formats: :json} do
    resources :users, only: [:index, :create]
    resource :session, only: [:create, :destroy]
    resources :products, only: [:index, :create, :show, :destroy, :update]
    resources :cart, only: [:create, :show, :update]
    resources :order, only: [:index, :show]
  end
end