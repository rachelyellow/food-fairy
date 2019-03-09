class DishController < ApplicationController

  def show 
    @result = Result.find params[:result_id]
    @quiz = Quiz.where(id: @result.quiz_id)
    @restaurant = Restaurant.where(id: @quiz.restaurant_id)
    id = params[:id]
    @dish = Dish.where(result_id: @result_id, id: id)
    render :json => {:dish => @dish,
                    :restaurant => @restaurant
    }
  end


  def create
  end


  def index 
  end 
end
