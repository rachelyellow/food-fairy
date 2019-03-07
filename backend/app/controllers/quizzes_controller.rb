class QuizzesController < ApplicationController
    def show 
        @restaurant = Restaurant.find params[:restaurant_id]
        id = params[:id]
        @quiz = Quiz.where(restaurant_id: @restaurant.id, id: id)
        @questions = Question.where(quiz_id: @quiz.ids)
             render :json => {:questions => @questions.as_json(include: {options: {include: :dishes} }),
             }     
    end

    def create

        quiz = Quiz.create(restaurant_id: params["restaurant_id"] );
        # 1
    # question1 = Question.create(quiz_id: quiz.id, inquiry: params["question[0][name]"] )
    # # 2
    # question2 = Question.create( quiz_id: quiz.id, inquiry:"Do you eat raw fish?")
    # # 3
    # question3 = Question.create(quiz_id: quiz.id, inquiry:"What spice level do you prefer?")
        3.times do |n|
            question = quiz.questions.new(inquiry: params["question[#{n}][name]"])
            question.save

            3.times do |j|
               byebug
               option = question.options.new(name: params["question[#{n}][options][#{j}]"])
               option.save

               3.times do |k|
                dish = options.dish.new(name: params["question[#{n}][options][#{j}][dish][#{k}]"])
                dish.save
               end
            end
        end

    end
end

