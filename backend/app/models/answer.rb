class Answer < ApplicationRecord
  belongs_to :question
  belongs_to :customer
  has_and_belongs_to_many :dishes
end
