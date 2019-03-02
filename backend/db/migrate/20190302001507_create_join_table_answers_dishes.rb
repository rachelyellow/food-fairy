class CreateJoinTableAnswersDishes < ActiveRecord::Migration[5.1]
  def change
    create_join_table :answers, :dishes do |t|
      # t.index [:answer_id, :dish_id]
      # t.index [:dish_id, :answer_id]
    end
  end
end
