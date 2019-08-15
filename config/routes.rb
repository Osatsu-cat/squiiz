Rails.application.routes.draw do
  devise_for :users
  root "questions#top"
  resources :questions do 
    collection do
      get :test
      post :count
      get "private" => 'questions#index_p'
      get 'myquestions' => 'questions#index_m'
    end
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
