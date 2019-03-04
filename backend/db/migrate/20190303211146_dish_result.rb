class DishResult < ActiveRecord::Migration[5.1]
  def change
    create_table :dish_results do |t|

      # Your code comes here
      t.integer :dish_id
      t.integer :result_id

      # Here comes the generated code 
      t.timestamps
    end
  end
end