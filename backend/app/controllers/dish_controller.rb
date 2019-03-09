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
    byebug
  end


  def index 
    # restaurant = Restaurant.find params[:restaurant_id]
    # dishes = Dish.where(restaurant_id: params[:restaurant_id])
    # dishesInfo = [];
    # dishes.each |dish| do 
    #   dishesInfo = 
    # end
    # render :json => {:dish}
    
  end 
end
