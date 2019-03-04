class QuestionsController < ApplicationController

    def show 
        @question = Question.find params[:id]
        @options = Option.where(question_id: @question.id)
        render json: @options
    end
end
