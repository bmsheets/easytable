class CreateReviews < ActiveRecord::Migration[5.1]
  def change
    create_table :reviews do |t|
      t.integer :author_id, null: false
      t.integer :restaurant_id, null: false
      t.text :body, null: false
      t.integer :food, null: false
      t.integer :ambiance, null: false
      t.integer :service, null: false
      t.integer :value, null: false

      t.timestamps
    end
    add_index :reviews, :author_id
    add_index :reviews, :restaurant_id
  end
end
