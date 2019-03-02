class CreateJoinTableOptionsDishes < ActiveRecord::Migration[5.1]
  def change
    create_join_table :options, :dishes do |t|
      # t.index [:option_id, :dish_id]
      # t.index [:dish_id, :option_id]
    end
  end
end
