Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: "static_pages#root"

  namespace :api, defaults: {formats: :json} do
    resources :users, only: [:index, :create] do
      resources :carts, only: [:create, :show, :update]
    end
    resource :session, only: [:create, :destroy]
    resources :products, only: [:index, :create, :show, :destroy, :update]
    resources :order, only: [:index, :show]
  end
end