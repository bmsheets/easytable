class AddCuisineToRestaurants < ActiveRecord::Migration[5.1]
  def change
    add_column :restaurants, :cuisine, :string
  end
end
