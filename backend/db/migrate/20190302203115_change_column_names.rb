class ChangeColumnNames < ActiveRecord::Migration[5.1]
  def change
    rename_column :restaurants, :lan, :latitude
    rename_column :restaurants, :long, :longitude
  end
end
