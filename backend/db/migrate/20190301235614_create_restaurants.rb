class CreateRestaurants < ActiveRecord::Migration[5.1]
  def change
    create_table :restaurants do |t|
      t.string :name
      t.string :reward
      t.string :email
      t.string :password_digest
      t.float :long
      t.float :lan

      t.timestamps
    end
  end
end
