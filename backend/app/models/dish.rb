class Dish < ApplicationRecord
    has_and_belongs_to_many :answers
    has_and_belongs_to_many :results
end
