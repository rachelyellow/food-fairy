class QuizzesController < ApplicationController
    def show 
        @quiz = Quiz.find params[:id]
        @questions = Question.where(quiz_id: @quiz.id)
             render :json => {:questions => @questions.as_json(include: {options: {include: :dishes} }),
             }     
    end

    def create
        quiz = Quiz.create(restaurant_id: params["restaurant_id"] )
        3.times do |n|
            question = quiz.questions.new(inquiry: params["question[#{n}][name]"])
            question.save

            3.times do |j|
               option = question.options.new(name: params["question[#{n}][options][#{j}]"])
               option.save

               3.times do |k|
                dish = option.dishes.new(name: params["question[#{n}][options][#{j}][dish][#{k}]"])
                dish.save
               end
            end
        end
    end 
end

