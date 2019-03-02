class CreateJoinTableResultsDishes < ActiveRecord::Migration[5.1]
  def change
    create_join_table :results, :dishes do |t|
      # t.index [:result_id, :dish_id]
      # t.index [:dish_id, :result_id]
    end
  end
end
