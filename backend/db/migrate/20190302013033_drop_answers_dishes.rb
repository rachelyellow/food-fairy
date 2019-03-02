class DropAnswersDishes < ActiveRecord::Migration[5.1]
  def up
    drop_table :answers_dishes
  end

  def down
    fail ActiveRecord::IrreversibleMigration
  end
end
