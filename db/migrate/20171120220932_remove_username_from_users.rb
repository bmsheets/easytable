class RemoveUsernameFromUsers < ActiveRecord::Migration[5.1]
  def change
    remove_column :users, :username, :string
    add_index :users, :email, unique: true
  end
end
