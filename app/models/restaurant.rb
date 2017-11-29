class Restaurant < ApplicationRecord
  validates :name, :city, :country, :capacity, :cuisine, presence: true

  has_many :reservations

  def self.search(search_term)
    Restaurant.where(
      "name ILIKE :term OR city ILIKE :term OR state ILIKE :term OR cuisine ILIKE :term",
      term: "%#{search_term}%"
    )
  end
end
