class DropResultsDishes < ActiveRecord::Migration[5.1]
  def up
    drop_table :dishes_results
  end

  def down
    fail ActiveRecord::IrreversibleMigration
  end
end
