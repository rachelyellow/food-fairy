class ResultsController < ApplicationController
  def create
    newResult = Result.create!({
      :customer => Customer.find(params["customerId"].to_i),
      :quiz => Quiz.find(params["quizId"].to_i),
      :dishes =>  [Dish.find(params["dishRecomendation"].to_i)]
    })
  end

  def show
    # LOGIC TO SEARCH FOR GIVEN RESULT AND RENDER SUGGESTED DISH
    @result = Result.where(customer_id: 1, quiz_id: 1)
    render json: @result
  end
end
