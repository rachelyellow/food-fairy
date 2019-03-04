class Option < ApplicationRecord
  belongs_to :question
  has_many :dish_options
  has_many :dishes, through: :dish_options 
end
