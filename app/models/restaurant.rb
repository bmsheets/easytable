class Restaurant < ApplicationRecord
  validates :name, :city, :country, :capacity, presence: true

  def self.search(search_term)
    Restaurant.where(
      "name ILIKE ? OR city ILIKE ? OR state ILIKE ? OR cuisine ILIKE ?",
      search_term,
      search_term,
      search_term,
      search_term
    )
  end
end
