class CreateRestaurants < ActiveRecord::Migration[5.1]
  def change
    create_table :restaurants do |t|
      t.string :name, null: false
      t.string :city, null: false
      t.string :state
      t.string :country, null: false
      t.string :address
      t.string :phone_number
      t.integer :zip_code
      t.integer :capacity, null: false

      t.timestamps
    end
    add_index :restaurants, :name
    add_index :restaurants, :city
  end
end
