class ResultsController < ApplicationController
  def create
    newResult = Result.new({
      :customer_id => 1,
      :quiz_id => 1
    })
  end

  def show
    # LOGIC TO SEARCH FOR GIVEN RESULT AND RENDER SUGGESTED DISH
    @result = Result.where(customer_id: 1, quiz_id: 1)
    render json: @result
  end
end
