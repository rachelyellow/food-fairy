class AddInqueryToQuestion < ActiveRecord::Migration[5.1]
  def change
    add_column :questions, :inquiry, :string
  end
end
