Rails.application.routes.draw do
  devise_for :users

  root to: "pages#splash"

  # Pages routes
  get "contact" => "pages#contact"
  get "press" => "pages#press"
  get "home" => "pages#home"
  get "media" => "pages#media"
  get "calendar" => "pages#calendar"

  # Page to try things out
  get "test" => "pages#test"

  # Works routes
  get "index_works" => "works#index_works"
  get "and_if_this_is_it" => "works#and_if_this_is_it"
  get "love_hurts" => "works#love_hurts"
  get "fragments_of_time" => "works#fragments_of_time"
  get "unspoken_thoughts" => "works#unspoken_thoughts"
  get "le_gout_de_dieu" => "works#le_gout_de_dieu"
  get "dusk" => "works#dusk"
end
