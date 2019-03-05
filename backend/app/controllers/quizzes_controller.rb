class QuizzesController < ApplicationController
    def show 
        @restaurant = Restaurant.find params[:restaurant_id]
        id = params[:id]
        @quiz = Quiz.where(restaurant_id: @restaurant.id, id: id)
        @questions = Question.where(quiz_id: @quiz.ids)
             render :json => {:questions => @questions.as_json(include: {options: {include: :dishes} }),
             }     
    end
end

