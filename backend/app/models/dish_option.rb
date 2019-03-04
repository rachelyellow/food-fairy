class DishOption < ApplicationRecord
  belongs_to :option
  belongs_to :dish
end
