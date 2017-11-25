class Restaurant < ApplicationRecord
  validates :name, :city, :country, :capacity, presence: true

  def self.search(searchTerm)
    Restaurant.where(
      "name LIKE ? OR city LIKE ? OR state LIKE ?",
      searchTerm,
      searchTerm,
      searchTerm
    )
  end
end
