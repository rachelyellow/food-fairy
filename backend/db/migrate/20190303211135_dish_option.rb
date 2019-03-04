class DishOption < ActiveRecord::Migration[5.1]
  def change
    create_table :dish_options do |t|

      # Your code comes here
      t.integer :dish_id
      t.integer :option_id

      # Here comes the generated code 
      t.timestamps
    end
  end
end