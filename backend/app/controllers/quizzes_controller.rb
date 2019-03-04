class QuizzesController < ApplicationController
    def show 
        @quiz = Quiz.find params[:id]
        @questions = Question.where(quiz_id: @quiz.id)
             render :json => {:questions => @questions.as_json(include: {options: {include: :dishes} }),
             }     
    end
end

