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
    @result = Result.find params[:id]
    @quiz = @result.quiz
    @restaurant = @quiz.restaurant
    puts @restaurant
  
    id = params[:id]
    @dishes = Result.find(id).dishes
    render json:  {:dishes => @dishes, :restaurant => @restaurant
  }
  end
end
