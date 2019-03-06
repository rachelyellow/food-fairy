class Result < ApplicationRecord
  belongs_to :customer
  belongs_to :quiz
  #has_many :dish_results
  has_and_belongs_to_many :dishes#, through: :dish_results
end
