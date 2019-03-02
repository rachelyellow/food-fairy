class CreateAnswers < ActiveRecord::Migration[5.1]
  def change
    create_table :answers do |t|
      t.references :option, foreign_key: true
      t.references :customer, foreign_key: true

      t.timestamps
    end
  end
end
